const elementHead=document.querySelector("#personal");
elementHead.style.color="rgb(25, 45, 255)";


const listItem = document.querySelector('#techStack');

const stackList = listItem.querySelector('ul');
const secondChild = stackList.children[1];
stackList.removeChild(secondChild);
