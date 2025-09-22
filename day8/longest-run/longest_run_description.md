**🔥 Longest Run**

**Story**
On a long fence, tags are repeated. You want to find which tag (character) appears in the longest consecutive run and how long that run is.


**Requirements**
	•	Input: a string (may contain letters, digits, spaces, punctuation).
	•	Output: either "<char> <length>" where <char> is the first character that achieves the maximum run and <length> is its length, or -1 if there is no non-space character.

If multiple characters tie for max length, return the one whose max-run appears first in the string.


**Examples**
Input: "aaabb  cccc a"
Output: "c 4"

Input: "    "
Output: -1

Constraints
	•	string length ≤ 100
