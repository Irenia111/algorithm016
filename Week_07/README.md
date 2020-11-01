## 1. Trie 树
代码模板
```javaScript
let $ = symbol('$')
class Trie {
  constructor() {
    this.root = {};
    this.endOfWord = $;
  }

  insert(word) {
    let node = this.root;
    for (let ch of word) {
      node[ch] = node[ch] || {};
      node = node[ch];
    }
    node[this.endOfWord] = this.endOfWord;
  }

  search(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node[ch]) return false;
      node = node[ch];
    }
    return node[this.endOfWord] === this.endOfWord;
  }

  startsWith(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node[ch]) return false;
      node = node[ch];
    }
    return true;
  }
}
```
## 2. 高级搜索
### 2.1 双向BFS
代码模板 ... 待更新

### 2.2  A* 代码模板
代码模板
```JavaScript
// Javascript
function aStarSearch(graph, start, end) {
  // graph 使用二维数组来存储数据
  let collection = new SortedArray([start], (p1, p2) => distance(p1) - distance(p2));

  while (collection.length) {
    let [x, y] = collection.take();
    if (x === end[0] && y === end[1]) {
      return true;
    }

    insert([x - 1, y]);
    insert([x + 1, y]);
    insert([x, y - 1]);
    insert([x, y + 1]);
  }
  return false;

  function distance([x, y]) {
    return (x - end[0]) ** 2 - (y - end[1]) ** 2;
  }

  function insert([x, y]) {
    if (graph[x][y] !== 0) return;
    if (x < 0 || y < 0 || x >= graph[0].length || y > graph.length) {
      return;
    }
    graph[x][y] = 2;
    collection.insert([x, y]);
  }
}

class SortedArray {
  constructor(data, compare) {
    this.data = data;
    this.compare = compare;
  }

  // 每次取最小值
  take() {
    let min = this.data[0];

    let minIndex = 0;
    for (let i = 1; i < this.data.length; i++) {
      if (this.compare(min, this.data[i]) > 0) {
        min = this.data[i];
        minIndex = i;
      }
    }
    this.data[minIndex] = this.data[this.data.length - 1];
    this.data.push();

    return min;
  }

  insert(value) {
    this.data.push(value);
  }

  get length() {
    return this.data.length;
  }
}
```