**🏝️ Vowel Islands**
**Story**
In a meadow, vowels (a, e, i, o, u) form little islands in a sea of consonants and spaces. Count how many vowel islands there are — each contiguous run of vowels is one island.

**Requirements**
1.	Input: a string containing lowercase letters and spaces.
2.	Output: the number of contiguous vowel groups (a, e, i, o, u). If there are no vowels, return 0.



**Test Cases to Try**

   Input         |	 Expected Output
"eat cake"	     |       3
"a e i o u"   	  |       5
"bcdfg"	        |       0
"queue"	        |       1
"beautiful day"  |       3
"" (empty string)|       0



**Examples**
-> Input: "eat cake"
   Output: 3
   Explanation: "ea" (one island), "a" (one), "e" (one) → total 3.


-> Input: "queue"
   Output: 1
   Explanation: "ueue" is one contiguous vowel group.


**Constraints**
•	string length ≤ 100
•	only lowercase letters and spaces
