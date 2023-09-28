class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */


  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  insertRecursively(val) {
    const newNode = new Node(val);

    function insertNode(node) {
      if (!node) return newNode;
      if (val < node.val) {
        node.left = insertNode(node.left);
      } else if (val > node.val) {
        node.right = insertNode(node.right);
      }
      return node;
    }

    this.root = insertNode(this.root);
    return this;
  }

  find(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return undefined;
  }

  findRecursively(val) {
    function findNode(node, val) {
      if (!node) return undefined;
      if (val === node.val) return node;
      if (val < node.val) {
        return findNode(node.left, val);
      } else {
        return findNode(node.right, val);
      }
    }

    return findNode(this.root, val);
  }

  dfsPreOrder() {
    const result = [];
    function traverse(node) {
      if (node) {
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  dfsInOrder() {
    const result = [];
    function traverse(node) {
      if (node) {
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  dfsPostOrder() {
    const result = [];
    function traverse(node) {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
      }
    }
    traverse(this.root);
    return result;
  }

  bfs() {
    const result = [];
    const queue = [];
    let node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
