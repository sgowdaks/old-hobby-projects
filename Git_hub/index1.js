function okay(){
   let name = document.getElementById("one").value;
    fetch(`https://api.github.com/users/${name}`)
    .then(Response => {
        console.log(Response);
        return Response.json();
        })
        .then(Response =>{
         console.log(Response);
         //console.log(Response.id);
         let no = Response.id;
         //console.log(Response.id);
         var btn = document.createElement("li");   
         btn.innerHTML = "ID =" + no; 
         document.getElementById('two').appendChild(btn);                  
         //document.body.appendChild(btn);   
         let no1 = Response.avatar_url;
         var img = document.createElement("img");   
         img.src = no1; 
                 document.getElementById('two').appendChild(img); 
        })
        .catch(err=> console.error(err));

                  
       
}
