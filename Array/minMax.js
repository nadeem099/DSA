function getMinMax(arr, n) {
  //code here
  let min;
  let max;
  //compare first two elements of array and assign min and max based on that
  if (arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  } else {
    max = arr[1];
    min = arr[0];
  }

  //compare each element with min and max and change the values accordingly
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}
