#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
  char *var = getenv("MYSHELL");

  if (var) {
    printf("MYSHELL has value %s and lives at %x\n", var, var);
  }
  return 0;
}
