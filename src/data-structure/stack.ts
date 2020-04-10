import LinkedList from './linked-list'

class Stack {
  private _data: any

  constructor (array: any[] = []) {
    this._data = new LinkedList(array)
  }

  pop (): LinkedList {
    return this._data.removeFirst()
  }

  push (item: any): LinkedList {
    return this._data.addFirst(item)
  }

  isEmpty (): boolean {
    return this._data.isEmpty()
  }

  size (): number {
    return this._data.size()
  }

  toString (): string {
    return this._data.toString()
  }
}

export default Stack
