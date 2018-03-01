function bubbleSort(array){
  //base case
  ///...to come

  //loop through a given array
  for(let i=0; i<array.length-1; i++){
    //compare if adjacent element
    if (compare(array[i], array[i+1])) {
      //if first is larger than second, swap
      swap(array, array[i+1], array[i], i, i+1);
    }
  }
  return array;
}

function swap(array, smaller, larger, idx1, idx2){
  array[idx1] = smaller;
  array[idx2] = larger;
}

function compare(el1, el2){
  return el1>el2;
}
