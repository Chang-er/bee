/*window.onload=function(){
    var ps=document.getElementById("password-active");
    ps.onmouseover=function(){
        var change=document.getElementById("changecolor");
        change.style.borderColor="#25b864";
        change.style.borderWidth="2px";
    }
    ps.onmouseout=function(){
        var change=document.getElementById("changecolor");
        change.style.borderColor="#d9d9d9";
    }
}*/
    var icon=document.getElementById("svg-icon");
    var icon2=document.getElementById("svg-icon-active");
    var psw=document.getElementById("password-active");
    function hideShowPsw(){
        if(psw.type==password){
            psw.type="text";
            icon.style.display="none";
            icon2.style.display="inline";
        }
        else{
            icon2.style.display="none";
            icon.style.display="inline";
            psw.type="password";
        }
    }
