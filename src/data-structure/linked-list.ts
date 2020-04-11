class LinkedList implements Iterator<Node> {
  private _head: Node
  private _tail: Node
  private _length: number

  constructor (array: any[] = []) {
    this._head = null
    this._tail = null
    this._length = 0

    for (const item of array) {
      this.append(item)
    }
  }

  getHead (): any {
    if (this._head) {
      return this._head.data
    }

    return null
  }

  getTail (): any {
    if (this._tail) {
      return this._tail.data
    }
    
    return null
  }

  size (): number {
    return this._length
  }

  isEmpty (): boolean {
    return this._length === 0
  }

  append (data: any): LinkedList {
    const node = new Node(data)

    if (!this._head) {
      this._head = node
      this._tail = node
      this._length++
      return this
    }

    this._tail.next = node
    this._tail = node
    this._length++

    return this
  }

  prepend (data: any): LinkedList {
    const node = new Node(data)

    if (!this._head) {
      this._head = node
      this._tail = node
      this._length++
      return this
    }

    node.next = this._head
    this._head = node
    this._length++

    return this
  }

  addFirst (data: any): LinkedList {
    return this.prepend(data)
  }

  addLast (data: any): LinkedList {
    return this.append(data)
  }

  addAt (index: number, data: any): LinkedList {
    const node = new Node(data)

    if (index < 0 || index > this._length) {
      return
    }

    let prev = null
    let current = this._head

    for (let i = 0; i < index; i++) {
      prev = current
      current = current.next
    }

    if (current === this._head) {
      node.next = current
      this._head = node
    } else {
      node.next = current
      prev.next = node
    }

    this._length++

    return this
  }

  removeFirst (): any {
    return this.removeAt(0)
  }

  removeLast (): any {
    return this.removeAt(this._length - 1)
  }

  remove (data: any) {
    let prev = null
    let current = this._head

    while (current) {
      if (current.data === data) {
        if (current === this._head) {
          this._head = this._head.next
        } else if (current === this._tail) {
          this._tail = prev
          prev.next = null
        } else {
          prev.next = current.next
        }

        this._length--
        return true
      }

      prev = current
      current = current.next
    }

    return false
  }

  removeAt (index: number): any {
    if (!this._head) {
      return
    }

    if (index < 0 || index > this._length - 1) {
      return
    }

    let prev = null
    let current = this._head

    for (let i = 0; i < index; i++) {
      prev = current
      current = current.next
    }

    if (current === this._head) {
      this._head = this._head.next
    } else {
      prev.next = current.next
    }

    this._length--

    return current.data
  }

  values (): any[] {
    const list = []

    for (let item of this) {
      item = item instanceof Object ? JSON.stringify(item) : item
      list.push(item)
    }

    return list
  }

  reverse (): void {
    const reverse = (node) => {
      if (!node) {
        return null // list does not exist.
      }

      if (node.next === null) {
        return node // list with only one node.
      }

      const rest = reverse(node.next) // recursive call on rest.
      node.next.next = node // make first; link to the last node in the reversed rest.
      node.next = null // since first is the new last, make its link null.
      return rest // rest now points to the head of the reversed list.
    }

    this._tail = this._head
    this._head = reverse(this._head)
  }

  [Symbol.iterator] () {
    return {
      node: this._head,
      next () {
        let result = { value: undefined, done: true }

        if (this.node) {
          result = { value: this.node.data, done: false }
          this.node = this.node.next
        }

        return result
      }
    }
  }

  toString (): string {
    return this.values().join(' -> ')
  }

  private node: Node

  public next(): IteratorResult<Node> {
    return {
      done: false,
      value: this.node.data
    }
  }
}

class Node {
  data: any
  next: any
  
  constructor (data: any) {
    this.data = data
    this.next = null
  }
}

export default LinkedList
