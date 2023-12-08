/* 

input => ABABAB 
output => AB

input => ABCABC
output => ABC

input => ABCDE
output => -1

input => ABABABAB
output => ABAB
:2
ABAB ABAB
ABABABAB === ABABABAB
:3
for 
:4
:8


// ---------
function ElementMerger
input => [1, 3, 4, 7, 13]
output => ElementMerger([2, 1, 3, 6])

[1, 2, 3]
[1, 1]
[2]

output => 2

input => )(())()( (8 char, 3 pairs)
output => 2

let totalPair = 0
let openBracketCount = 0

"(" => openBracketCount++
")" => openBracketCount-- && totalPair++

3 => 80-100
2 => 50-78

*/
