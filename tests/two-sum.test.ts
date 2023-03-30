import { test, expect } from "bun:test";
import { twoSum } from "../src/two-sum.js";

test("1. Two-sum works", () => {
  let nums = [[1, 3, 6, 3, 8], [4, 7, 8, 4, 3], []];
  let targets = [7, 20, 9];
  let expecteds = [[0, 2], [0, 0], [0, 0]];

  for (let i = 0; i < nums.length; i++) {
    let actual = twoSum(nums[i], targets[i]);
    expect(actual).toStrictEqual(expecteds[i])
  }
})
