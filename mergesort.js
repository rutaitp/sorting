'use strict'

// function mergeSort(array) {

//   if (array.length <= 1) {
//     return array;
//   }

//   split(array);

// }

function split(wholeArray) {

  let midIndex = wholeArray.length / 2;

  let firstHalf = wholeArray.slice(0, midIndex);
  let secondHalf = wholeArray.slice(midIndex);

  return [firstHalf, secondHalf];
}

//rename to firstHalf, secondHalf
function merge(arr1, arr2) {
  let shorterArrayLength = arr1.length < arr2.length ? arr1.length : arr2.length;

  for (let i = 0; i < shorterArrayLength; i++) {

    // returns true if first element is greater
    // returns false if second is greater
    compare(el1, el2);

}
