// GIven a sorted array of numbers, the task is to search for a given element in the array using binary search.


let nums  = [1, 3, 5, 7, 9,];

  function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
      let mid = Math.floor((left + right)/ 2);
      if(target === array[mid]) {
        return "element found";
      } 
      else if (target < array[mid]) {
        right = mid - 1
      }
      else { left = mid + 1;}
    } return "element not found"
  }
console.log(binarySearch(nums, 7)); //"Element Found"


//Find the number of the elements in array A that are divisible by 2 and greater than 15.

const array = [100,84,37];

const out = array.filter(x => x%2 === 0 && x >= 15) 
  // return length

console.log(out);


//Given two arrays, return the sum of the array with the highest value when its elements are summed respectively.
function highestSum () {
  const firstArr = arr1.reduce((a, b) => a + b);
  const secondArr = arr2.reduce((a, b) => a + b);
  
  return Math.max(firstArr, secondArr);
}

  console.log(highestSum(firstArr, secondArr);
  
 
  //Find the number of elements in an array Y, that are greater than or equal to the variable X and less than or equal to the variable Z
    
  function numOfElements (y, x, z) {
  let count = 0;
    
    for (let i of y) {
    if(i >= x && i <= z) {
    count++
      }
    }
    return count
  }

const result = numOfElements([2, 3, 0, 1, 7] 4, 8)  // 1


//GIven an array arr[] and an integer k where k is smaller than the size of array, the task is to find the kth smallest element in the given array. It is given that all array elements are distinct.

function smallestElement (arr, k) {
  
let newArr = arr.sort((a, b) => a - b);
  
  return newArr[k - 1];
 }

  const result = smallestElement([7, 10, 4, 3, 20, 15], 4) // 10
