#!/bin/bash

while IFS= read -r x ;do
  while IFS= read -r y ;do
    while IFS= read -r z;do
    
      # if [[ "$x" != "$y" ]]; then
        sum=$(( x+y+z ))
        echo "$x + $y + $z = $sum"
        if [[ "$sum" == "2020" ]]; then
          multiplication=$(( x*y*z ))
          echo "RESULT=$multiplication, $sum, $x, $y"
          exit 0
        fi
      # fi
    done <<< "$(cat input.txt)"
  done <<< "$(cat input.txt)"
done <<< "$(cat input.txt)"