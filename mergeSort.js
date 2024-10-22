function merge(leftArr, rightArr) {
  const tmp = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    leftArr[0] <= rightArr[0]
      ? tmp.push(leftArr.shift())
      : tmp.push(rightArr.shift());
  }
  return [...tmp, ...leftArr, ...rightArr];
}

export function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const midpoint = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, midpoint);
  const rightHalf = arr.slice(midpoint, arr.length);
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}
