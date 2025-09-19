For spliting number into digits

Input  |  Expectation
23     |  2 3
34     |  3 4
56     |  5 6
152    |  1 5 2
3312   |  3 3 1 2


how will I get 3 from 23 ?
-> 23 % 10 = 3

how will I get "2 3" from 23 ?
-> 23 % 10 = 3
  23 - 3 = 20
  20 / 10 = 2

how will I get " 1 5 2 " from 152"
-> 152 % 10 = 2
  152 - 2 = 150
  150 / 10 = 15

-> 15 % 10 = 5
  15 - 5 = 10
  10 / 10 = 1

-> 1 % 10 = 1
  1 - 1 = 0
  0 / 10 = undefined

152 = input
digit = input % 10
input = input - 2
input = input / 10
