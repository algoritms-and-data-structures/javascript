class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value)
    } else {
      let node = this.head;
      for (let i = 0; i < index - 1; i++) {
        node = node.next;
      }
      const newNode = new Node(value);
      newNode.next = node.next;
      node.next = newNode;
    }
    this.length++;
  }

  remove(index) {
    if (this.isEmpty()) {
      console.log("Is empty");
    } else if(index > this.length) {
      console.log("Cannot remove: Index is larger than length")
    } else if (index === 0) {
      this.head = this.head.next;
      this.length--;
    } else {
      let node = this.head;
      for (let i = 0; i < index - 1; i++) {
        node = node.next;
      }
      let temp = node.next;
      node.next = temp.next;
      this.length--;
    }
  }
}