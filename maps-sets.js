// 1.
{1,2,3,4}
// 2.
'ref'
// 3.
0: {[1,2,3]: false}
1: {[1,2,3]: true}
// 4.

function hasDuplicate(arr) {
  const set = new Set(arr);
  if(set.size === arr.length){
    return false
  }
  return true
}
// 5.
const vowels = 'aeiou';

function vowelCount(str){
  const map = new Map();
  for(let char of str){
    if(vowels.includes(char)){
      if(map.has(char)){
        map.set(char, map.get(char)+1)
      } else
      map.set(char, 1)
    }
  }
}
