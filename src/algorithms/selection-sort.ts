import { swap } from '../helpers/array'

export const selectionSort = (array: number[]): void => {
  let indexMin: number

  // Itere n-1 vezes
  for (let i = 0; i < array.length - 1; i++) {
    // A cada iteração, determine quem será trocado. Começa com o primeiro
    // elemento, depois o segundo, etc.
    indexMin = i

    // A partir de i, compare o elemento i com os demais a direta
    for (let j = i; j < array.length; j++) {
      // Sempre que achar um elemento menor que o elemento i,
      // atualize o indexMin.
      if (array[j] < array[indexMin]) {
        indexMin = j
      }
    }

    // Quando acabar as iterações, troque o elemento atual com o menor elemento encontrado.
    if (i !== indexMin) {
      swap(array, indexMin, i)
    }
  }
}
