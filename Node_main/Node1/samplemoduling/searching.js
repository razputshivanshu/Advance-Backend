
function linearSearch(arr, x){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == x){
      return i;
    }
  }
  return NaN;
}

function binarySearch(arr,x){
  // Some implementation
}

module.exports = {
  linear: linearSearch,
  binary: binarySearch,

}

