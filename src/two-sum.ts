export function twoSum(nums: number[], target: number): number[] {
  //Find 2 array indexes in which the sum equals to the target number
  //since the expected result is the first two pairs that found,
  //it's just best to brute force
  //O(nlogn) Brute force
  //
  //I don't know why people prefer using hashmap to find the pairs 
  //in an "elegant" way that looks like a constant time complexity
  //when the hashmap itself (under the hood) uses array 
  //which its search method is using iterative approach (O(n))
  //not only that will introduce more space complexity,
  //it will also has O(n**2) under the hood
  //
  //two pointers approach is also not good since the array is not sorted
  //
  //Disclaimer: it's just my opinion. cmiiw
  //SOLUTION:

  //if array is empty, return [0,0] and end the execution.
  if (nums.length === 0) {
    return [0, 0]
  }

  //iterate each num, and compare with the rest
  //By using the second nested for loops, the complexity will be O(nlogn)
  //it's even better than using a single loop + array.findIndex()
  //why? because array.findIndex will blindly search from 0..array.length
  //for every iteration which result in O(n**2) complexity
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return [0, 0]
}
