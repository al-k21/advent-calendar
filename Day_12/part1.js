const fs = require('fs');

let input = fs.readFileSync('./input', 'utf8');
input = input.slice(0, input.length -1); // Delete new line character
input = input.split('\n');

let nodes = [];
for (i of input)  {
  let id = i.split(' ')[0];
  let children = i.split('<-> ')[1].split(', ');
  nodes.push( { id, children } );
}

console.log(walk('0'));

function walk(id) {
  let index = nodes.findIndex(n => n.id === id);
  if (index >= 0) {
    let node = nodes[index];
    nodes.splice(index, 1);
    const reducer = (acc, val) => walk(val) + acc;
    return node.children.reduce(reducer, 0) + 1
  }
  return 0
}
