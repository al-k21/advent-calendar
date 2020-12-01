#!/bin/bash

input=$(cat input.txt)

function part1() {
  while IFS= read -r x ;do
    while IFS= read -r y ;do
      if [[ "$x" != "$y" ]]; then
        sum=$(( x+y ))
        if [[ "$sum" == "2020" ]]; then
          multiplication=$(( x*y ))
          echo "$multiplication"
          return
        fi
      fi
    done <<< "$input"
  done <<< "$input"
}

function part2() {
  while IFS= read -r x ;do
    while IFS= read -r y ;do
      while IFS= read -r z;do
        sum=$(( x+y+z ))
        echo "$x + $y + $z = $sum"
        if [[ "$sum" == "2020" ]]; then
          multiplication=$(( x*y*z ))
          echo "$multiplication"
          return
        fi
      done <<< "$input"
    done <<< "$input"
  done <<< "$input"
}

echo "Day 1:"
echo "-> Part 1: $(part1)"
echo "-> Part 2: $(part2)"