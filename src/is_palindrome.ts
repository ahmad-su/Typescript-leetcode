export function isPalindrome(x: number): boolean {
  //Check if the number (x) is a palindrome number (e.g 121, 22, 4664, 313) 
  //without converting to string
  //converting the number directly to number is better than converting it to array first
  //which will consume more memory (will add extra space compexity, ofc)
  let y = reverseNum(x)

  //debug:
  // console.log(x, y)
  return x === y
}

function reverseNum(num: number): number {
  //first, we will get how much digit the number has
  let digit = 0
  let remaining = num;
  while (remaining > 0) {
    digit++
    remaining = ~~((remaining / 10))
  }

  //then, we will extract and apply reverse digit positioning
  //by extracting number from right to left,
  //and then apply reverse powering
  //
  //example:
  // num 123 -> extract 3; apply 3x(10**2) = 300
  // num 12 -> extract 2; apply 2x(10**1) = 20
  // num 1 -> extract 1; apply 1x(10**0) = 1
  // and then sum 300 + 20 + 1 = 321
  let reversedNum = 0;
  while (digit > 0) {
    let lastNum = (num % 10)
    reversedNum = reversedNum + (lastNum * (10 ** (digit - 1)))
    num = ~~((num / 10))
    digit--
  }

  // finally return the reversed number 
  return reversedNum
}
