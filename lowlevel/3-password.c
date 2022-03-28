// Compile with gcc -fno-stack-protector stack1.c -m32 -g
#include <stdio.h>
#include <string.h>

int check_auth(char *password) {
  int auth_flag = 0;
  char password_buffer[16];

  strcpy(password_buffer, password);
  if (strcmp(password_buffer, "secret") == 0)
    auth_flag = 1;

  return auth_flag;
}
int main(int argc, char *argv[]) {
  if (check_auth(argv[1])) {
    printf("Success!\n");
  } else {
    printf("Failed.\n");
  }
}
