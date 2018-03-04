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

let groups = 0;
while (nodes.length) {
  walk(nodes[0].id);
  groups++;
}

console.log(groups);

function walk(id) {
  let index = nodes.findIndex(n => n.id === id);
  if (index >= 0) {
    let node = nodes[index];
    nodes.splice(index, 1);
    node.children.forEach(child => walk(child));
  }
  return 0
}
