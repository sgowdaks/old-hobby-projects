function calTip(){
    var billAmt = document.getElementById("billamt").value;
    var serQua = document.getElementById("servicequi").value;
    var peeps = document.getElementById("people").value;
    //console.log(billAmt,serQua,peeps);
    
    if(billAmt === "" || serQua == 0){
        alert("Please enter valid value");
    }
    
    if(peeps==="" || peeps<=1){
        peeps=1;
    }
    //console.log(billAmt,serQua,peeps);
    
    var total=(billAmt*serQua)/peeps;
    console.log(total);
    total = Math.round(total*100)/100;
    total=total.toFixed(2);
    //console.log(total);
    document.getElementById("tip").innerHTML = total;
    
    
    }
    
    document.getElementById("three").onclick = function(){
        //console.log(calTip());
        calTip();
        
    }
    
    
    