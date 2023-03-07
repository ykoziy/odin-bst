import Tree from '../tree.js';

describe('Tree', () => {
  let tree = null;

  beforeEach(() => {
    tree = new Tree();
  });

  test('Constructor creates balanced BST from unsorted array', () => {
    const array = [4, 2, 6, 1, 3, 5, 7];
    tree = new Tree(array);
    expect(tree.levelOrder()).toEqual([4, 2, 6, 1, 3, 5, 7]);
  });

  it('inserts item to the right side of the BST', () => {
    const array = [4, 2, 6, 1, 3, 5, 7];
    tree = new Tree(array);
    tree.insert(12);
    expect(tree.levelOrder()).toEqual([4, 2, 6, 1, 3, 5, 7, 12]);
  });

  it('inserts item to the left side of the BST', () => {
    const array = [4, 2, 6, 1, 3, 5, 7];
    tree = new Tree(array);
    tree.insert(12);
    tree.insert(11);
    expect(tree.levelOrder()).toEqual([4, 2, 6, 1, 3, 5, 7, 12, 11]);
  });

  it('does not insert duplicates', () => {
    const array = [4, 2, 6, 1, 3, 5, 7];
    tree = new Tree(array);
    tree.insert(12);
    tree.insert(12);
    tree.insert(12);
    expect(tree.levelOrder()).toEqual([4, 2, 6, 1, 3, 5, 7, 12]);
  });

  it('finds the node located on the right side of the BST', () => {
    const array = [4, 2, 6, 1, 3, 5, 7];
    tree = new Tree(array);
    expect(tree.find(7).data).toEqual(7);
  });

  it('finds the node located on the left side of the BST', () => {
    const array = [4, 2, 6, 1, 3, 5, 7];
    tree = new Tree(array);
    expect(tree.find(2).data).toEqual(2);
  });

  it('does not find anything if node does not exist', () => {
    const array = [4, 2, 6, 1, 3, 5, 7];
    tree = new Tree(array);
    expect(tree.find(12)).toBeNull();
  });

  it('does level order traversal with callback function', () => {
    const array = [4, 2, 6, 1, 3, 5, 7];
    tree = new Tree(array);
    let result = [];
    tree.levelOrder((item) => result.push(item.data));
    expect(result).toEqual([4, 2, 6, 1, 3, 5, 7]);
  });

  it('prints in readable format', () => {
    const array = [4, 2, 6, 1, 3, 5, 7];
    tree = new Tree(array);
    let spy = jest.spyOn(tree, 'print');
    tree.print();
    expect(spy).toHaveBeenCalled();
  });

  it('retuns array using inorder traversal', () => {
    const array = [4, 2, 6, 1, 3, 5, 7];
    tree = new Tree(array);
    expect(tree.inorder()).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('does inorder traversal using callback', () => {
    const array = [4, 2, 6, 1, 3, 5, 7];
    tree = new Tree(array);
    let result = [];
    tree.inorder((item) => result.push(item.data));
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('retuns array using preorder traversal', () => {
    const array = [4, 2, 6, 1, 3, 5, 7];
    tree = new Tree(array);
    expect(tree.preorder()).toEqual([4, 2, 1, 3, 6, 5, 7]);
  });

  it('does preorder traversal using callback', () => {
    const array = [4, 2, 6, 1, 3, 5, 7];
    tree = new Tree(array);
    let result = [];
    tree.preorder((item) => result.push(item.data));
    expect(result).toEqual([4, 2, 1, 3, 6, 5, 7]);
  });

  it('retuns array using postorder traversal', () => {
    const array = [4, 2, 6, 1, 3, 5, 7];
    tree = new Tree(array);
    expect(tree.postorder()).toEqual([1, 3, 2, 5, 7, 6, 4]);
  });

  it('does postorder traversal using callback', () => {
    const array = [4, 2, 6, 1, 3, 5, 7];
    tree = new Tree(array);
    let result = [];
    tree.postorder((item) => result.push(item.data));
    expect(result).toEqual([1, 3, 2, 5, 7, 6, 4]);
  });
});
