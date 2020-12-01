#!/bin/bash

while IFS= read -r x ;do
  while IFS= read -r y ;do
    if [[ "$x" != "$y" ]]; then
      sum=$(( x+y ))
      if [[ "$sum" == "2020" ]]; then
        multiplication=$(( x*y ))
        echo "RESULT=$multiplication, $sum, $x, $y"
        exit 0
      fi
    fi
  done <<< "$(cat input.txt)"
done <<< "$(cat input.txt)"