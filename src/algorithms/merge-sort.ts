export const mergeSort = (
  array: number[],
  low = 0,
  high: number = array.length - 1
): void => {
  if (low < high) {
    /**
     * This line used to be "const mid = Math.floor((low + high) / 2)" but
     * it was changed due to a bug explained here: https://bit.ly/3aZ2zyl
     */
    const mid = low + Math.floor((high - low) / 2)

    mergeSort(array, low, mid)
    mergeSort(array, mid + 1, high)
    merge(array, low, mid, high)
  }
}

export const merge = (
  array: number[],
  low: number,
  mid: number,
  high: number
): void => {
  const L = []
  const R = []

  for (let i = low; i <= mid; i++) {
    L.push(array[i]) // Create a subarray from low to mid
  }

  for (let i = mid + 1; i <= high; i++) {
    R.push(array[i]) // Create a subarray from mid+1 to high
  }

  let i = 0
  let j = 0
  let k = low

  // Merge the first "Math.min(L.length, R.length)" elements
  while (i < L.length && j < R.length) {
    if (L[i] < R[j]) {
      array[k++] = L[i++]
    } else {
      array[k++] = R[j++]
    }
  }

  // Add the remaining elements of L
  while (i < L.length) {
    array[k++] = L[i++]
  }

  // Add the remaining elements of R
  while (j < R.length) {
    array[k++] = R[j++]
  }
}
