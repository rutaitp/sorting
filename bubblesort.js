function bubbleSort(array){
  //base case
  ///...to come
  let arrayHasChanged = false;

  //loop through a given array
  for(let i=0; i<array.length-1; i++){
    //compare if adjacent element
    if (compare(array[i], array[i+1])) {
      //if first is larger than second, swap
      swap(array, array[i+1], array[i], i, i+1);
      arrayHasChanged = true;
    }
  }

  //if we passed through array and no changes were needed
  //it means it was sorted
  //so return that array
  if (!arrayHasChanged) {
    return array;
  }
  //otherwise keep sorting the array
  return bubbleSort(array);

}

function swap(array, smaller, larger, idx1, idx2){
  array[idx1] = smaller;
  array[idx2] = larger;
}

// returns true if first element is greater
// returns false if second is greater
function compare(el1, el2){
  return el1>el2;
}
