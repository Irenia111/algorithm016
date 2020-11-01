/**
 * Initialize your data structure here.
 */
// https://leetcode-cn.com/problems/implement-trie-prefix-tree/solution/quan-ji-chu-ti-mu-yao-qiu-zi-dian-shu-wan-zheng-zh/
var Trie = function() {
    this.root = new TrieNode();
};
var TrieNode = function() {
    this.next = {};
    this.isEnd = false;
};
/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (!word) return false;

    let node = this.root;
    for (let i = 0; i < word.length; ++i) {
        if (!node.next[word[i]]) {
            node.next[word[i]] = new TrieNode();
        }
        node = node.next[word[i]];
    }
    node.isEnd = true;
    return true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if (!word) return false;

    let node = this.root;
    for (let i = 0; i < word.length; ++i) {
        if (node.next[word[i]]) {
            node = node.next[word[i]];
        } else {
            return false;
        }
    }
    return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    if (!prefix) return true;

    let node = this.root;
    for (let i = 0; i < prefix.length; ++i) {
        if (node.next[prefix[i]]) {
            node = node.next[prefix[i]];
        } else {
            return false;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */