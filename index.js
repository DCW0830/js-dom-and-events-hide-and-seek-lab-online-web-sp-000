const getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

const nestedTarget = () => {
  return document.querySelector('#nested .target')
}

const increaseRankBy = (n) => {
  const rankLis = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankLis.length; i++) {
    rankLis[i].innerHTML = n.toString();
  }
}

const deepestChild = () => {
  let currentNode = document.getElementById("grand-node")
  let nextNode = currentNode.children[0]

  while (nextNode) {
    currentNode = nextNode
    nextNode = currentNode.children[0]
  }
  return currentNode
}
