function myFunction(){
  let val=document.getElementById("name").value
  //document.getElementById("result").innerHTML+=val;
  var node = document.createElement("li");// Create a <li> node
  var textnode = document.createTextNode(val);// Create a text node
  node.appendChild(textnode);    
  //document.getElementById("myList").appendChild(node);
  

// START ADD DELETE BUTTON
var dBtn = document.createElement("button");
dBtn.appendChild(document.createTextNode("X"));
node.appendChild(dBtn);
document.getElementById("myList").appendChild(node);
var me=document.getElementById("name");
me.value=" ";


dBtn.addEventListener("click",deleteListItem);
//document.getElementById("myList").appendChild(node);

function deleteListItem(){
    
            node.classList.add("delete");
    
    //document.getElementById("button").innerHTML = "";  
}
}
  


//function removeItem(item){
//  var itemToRemove = document.getElementById(item);
//    itemToRemove.parentNode.removeChild(itemToRemove);
//}

