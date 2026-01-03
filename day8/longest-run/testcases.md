**Test Cases to Try**

Input               |     Expected Output
"aaabb cccc a"      |     "c 4"
"xxxyyyxxx"         |     "x 3" (first tie)
"a"                 |     "a 1"
"abbbbaaa"          |     "b 4"
" "                 |     -1
"!!!!!!!"           |     "! 7" 

tagcount = 0 //3
longestTag = ""
longesttagcount = 0;

-> check the occurence of each letter
  start from 1st and compare it with others
    if both are same
      then tagcount + 1
      then longestTag = 1st
    longesttagcount = tagcount
