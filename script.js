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
