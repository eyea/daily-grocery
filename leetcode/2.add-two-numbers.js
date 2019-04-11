// link https://leetcode-cn.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 将链表转换成数组
var listNodeToArray = function(ln) {
  if (!ln) {
    return []
  }
  var arr = [ln.val]
  var nextVal = listNodeToArray(ln.next)
  return arr.concat(nextVal)
}

// 将数组转换成链表
var arrayToListNode = function(ary) {
    if(!ary.length) {
        return null
    }

    var node
    var head = {value: ary[0], next: null}
    var pnode = head  //pnode变量用来保存前一个节点

    for(var i = 1; i < ary.length; i++) {
        node = {value: ary[i], next:null}
        pnode.next = node   //将前一个节点的next指向当前节点
        pnode = node   //将node赋值给pnode
      debugger
    }

    return head
}

// 执行函数
var addTwoNumbers = function(l1, l2) {
  let result = ''
  let a1 = listNodeToArray(l1)
  let a2 = listNodeToArray(l2)
  let a11 = 0
  let a21 = 0
  for (let i=0; i<a1.length; i++) {
    a11+=a1[i]*Math.pow(10,a1.length-1-i)
  }
  for (let i=0; i<a2.length; i++) {
    a21+=a2[i]*Math.pow(10,a2.length-1-i)
  }
  let a31 = a11 + a21
  let lastChange = a31.toString().split('').map(v=>parseInt(v, 10))
  console.log('a31', lastChange)
  return arrayToListNode(lastChange)
}

////////////    分割线 ////////////////
/**
 *这里涉及到一个知识  链表
 *
 * 
 *给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// correct function
var addTwoNumbersCorrect = function(l1, l2) {
    let listNode1 = l1
    let listNode2 = l2
    let res = new ListNode(0)
    let curr = res
    let carry = 0
    while (listNode1 !== null || listNode2 !== null) {
      let total = (listNode1 == null ? 0 : listNode1.val) + (listNode2 == null ? 0 : listNode2.val) + carry
      carry = parseInt(total / 10)
      curr.next = new ListNode(total % 10)
      curr = curr.next
      if (listNode1 != null) listNode1 = listNode1.next
      if (listNode2 != null) listNode2 = listNode2.next
    }
  if (carry > 0) {
    curr.next = new ListNode(carry)
  }
  return res.next
};

