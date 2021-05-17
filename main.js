const str = `
010-2134-1234
123@naver,com
https://regexr.com/
hi
aaccddeeee
Com

`

console.log(
  str.match(/(?<=@).{1,}/g)
)