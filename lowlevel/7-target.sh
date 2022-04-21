#!/bin/sh

old=$(ls -l /tmp/passwd)
new=$(ls -l /tmp/passwd)

while [ "$old" == "$new" ]
do
    ./a.out < password_input
    new=$(ls -l /tmp/passwd)
done
