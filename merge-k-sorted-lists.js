/*

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists || lists.length === 0) return null;

  const pqueue = new MinPriorityQueue();
  
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      pqueue.enqueue(lists[i], lists[i].val);
    }
  }
  
  let head = new ListNode(0, null);
  let currNode = head;
  while (pqueue.size()) {
    let ll = pqueue.dequeue().element;
    currNode.next = ll;
    currNode = currNode.next;
    ll = ll.next;
    if (ll) {
      pqueue.enqueue(ll, ll.val);
    }
  }
  
  head = head.next;
  
  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) return null;

  const pqueue = new MinPriorityQueue();
  
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      pqueue.enqueue(lists[i], lists[i].val);
    }
  }
  if (pqueue.size() === 0) return null;
  
  let head = pqueue.dequeue().element;
  let curr = head;
  if (head?.next) pqueue.enqueue(head.next, head.next.val);
  
  while (pqueue.size() > 0) {
    let ll = pqueue.dequeue().element;
    curr.next = ll;
    curr = ll;
    ll = ll.next;
    if (ll) pqueue.enqueue(ll, ll.val);
  }
  
  return head;
};
