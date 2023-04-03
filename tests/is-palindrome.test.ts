import { test, expect } from "bun:test";
import { isPalindrome } from "../src/is_palindrome.js";

test("9. Is Palindrome works", () => {
  let nums = [43934, 33, 12];
  let expecteds = [true, true, false];

  for (let i = 0; i < nums.length; i++) {
    let actual = isPalindrome(nums[i]);
    let expected = expecteds[i];

    expect(actual).toStrictEqual(expected);
  }
})
