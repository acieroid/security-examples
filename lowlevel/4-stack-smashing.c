/* Compile: gcc -fno-stack-protector -z execstack -g -m32 stack-smashing.c */
/* Disable ASLR: echo 0 > /proc/sys/kernel/randomize_va_space           */ 

#include <stdio.h>
#include <unistd.h>

int vuln() {
    char buf[80];
    int r;
    r = read(0, buf, 400);
    printf("Read %d bytes. buf is at %08x and is %s\n", r, &buf, buf);
    return 0;
}

int main(int argc, char *argv[]) {
    vuln();
    return 0;
}

