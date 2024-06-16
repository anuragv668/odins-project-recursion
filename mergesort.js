function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } 
  let midpoint = Math.floor(arr.length / 2);
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let arr = [3, 2, 5, 7, 1, 2, 0];
console.log(arr);
console.log(mergeSort(arr));
