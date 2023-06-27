/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
   	const reverse = (node) => {
		if (!node) return;

		let left = node.left;
		let right = node.right;
		node.left = right;
		node.right = left;

		reverse(node.left);
		reverse(node.right);
	};

	reverse(root);
	return root;
};