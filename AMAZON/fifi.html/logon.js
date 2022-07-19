function validationform(){
    var firstname=document.regform.name.value;
    var password=document.regform.password.value;
    var submit=document.regform.name.value;

if(firstname ==null||  Name==""){
alert("firstname can't be blank");
return false;
}else if(password.length<6){
alert("password must be at least 6 characters long.");
return false;

}
}
