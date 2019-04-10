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

