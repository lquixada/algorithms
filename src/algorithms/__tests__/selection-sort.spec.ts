import { selectionSort } from '../selection-sort'

describe('Selection Sort', () => {
  it('sorts an array in place', () => {
    const array = [2, 17, 15, 20, 9, 31]
    selectionSort(array)
    expect(array).toEqual([2, 9, 15, 17, 20, 31])
  })
})
