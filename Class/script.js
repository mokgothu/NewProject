var nam="Refilwe";
var gender;
var vote;

function Displayname(){

    
    document.getElementById("name").innerHTML=nam;
    

}

function DisplayGender(){

    gender="female"
    let age ="26"
    nam="Charity";
    document.getElementById("name").innerHTML=nam;
    document.getElementById("age").innerHTML=age;
    document.getElementById("gender").innerHTML=gender;
}

function calculateAge(year){
    let age=document.getElementById("age").innerHTML=2022-year;
    return age;
}

function DisplayVote(age){
    if(age>18){
    let age=document.getElementById("DisplayVote").innerHTML="You can vote";
     return age;

    }

    else if(age<18){
        let age=document.getElementById("DisplayVote").innerHTML="You cant vote";
        return age;
    }

    

    
     

       
        

}


Displayname();
DisplayGender();
calculateAge(1994);
DisplayVote(14);
