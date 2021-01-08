function myFunction(val){
    document.getElementById("numbers").value+=val
}
function result(){
    let a= document.getElementById("numbers").value; 
    let main = eval(a)
    document.getElementById("numbers").value = main
    //console.log(main);
}