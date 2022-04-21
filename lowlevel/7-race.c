#include <unistd.h>
#include <stdio.h>
#include <string.h>

int main() {
  char *file = "/tmp/foo.txt";

  char buffer[60];
  scanf("%50s", buffer);

  if (!access(file, W_OK)) {
    FILE* f = fopen(file, "a+");
    fwrite("\n", sizeof(char), 1, f);
    fwrite(buffer, sizeof(char), strlen(buffer), f);
    fclose(f);
} else {
    printf("Failed: no permission\n");
  }
}
