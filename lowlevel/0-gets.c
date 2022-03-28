#include <stdio.h>
#include <string.h>
int main() {
  char input[20];
  char password[20];

  strncpy(password, "ddddddddddddddd", 20);
  gets(input);

  if (strncmp(input, password, 20) == 0){
    printf("SUCCESS!\n");
  } else {
    printf("FAILURE!\n");
  }
  return 0;
}
