#include <stdio.h>
#include <stdlib.h>

int g = 12;
int u;

int main() {
  int l = 13;
  int *d = malloc(100);
  printf("Address of g : 0x%08x\n", (size_t)&g);
  printf("Address of u: 0x%08x\n", (size_t) &u);
  printf("Address of l: 0x%08x\n", (size_t)&l);
  printf("Address of *d: 0x%08x\n", (size_t) d);
  printf("Address of main: 0x%08x\n", (size_t)&main);
}

