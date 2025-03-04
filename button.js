function buttonEfect(event){
    let assigned = document.getElementById("assigned").innerText
    assigned = parseInt(assigned);
    const changedAssigned = assigned-1;
    document.getElementById("assigned").innerText = changedAssigned;


    let finished = document.getElementById("finished").innerText
    finished = parseInt(finished);
    const changedFinished = finished+1;
    document.getElementById("finished").innerText = changedFinished;

    
    if(changedAssigned===0){
        alert("you have successfully completed all the task!");
    }
}




document.getElementById("button1").addEventListener("click", function(event){
     buttonEfect(event);
     document.getElementById("button1").disabled=true;
     document.getElementById("button1").style.background= "gray";
     const time = new Date()
     let headline= document.getElementById("headline1").innerText;
     createElement(headline,time);
})



document.getElementById("button2").addEventListener("click", function(){
     buttonEfect();
     document.getElementById("button2").disabled=true;
     document.getElementById("button2").style.background= "gray";
     const time = new Date()
     let headline= document.getElementById("headline2").innerText;
     createElement(headline,time);
})
document.getElementById("button3").addEventListener("click", function(){
     buttonEfect();
     document.getElementById("button3").disabled=true;
     document.getElementById("button3").style.background= "gray";
     const time = new Date()
     let headline= document.getElementById("headline3").innerText;
     createElement(headline,time);
})
document.getElementById("button4").addEventListener("click", function(){
     buttonEfect();
     document.getElementById("button4").disabled=true;
     document.getElementById("button4").style.background= "gray";
     const time = new Date()
     let headline= document.getElementById("headline4").innerText;
     createElement(headline,time);
})
document.getElementById("button5").addEventListener("click", function(){
     buttonEfect();
     document.getElementById("button5").disabled=true;
     document.getElementById("button5").style.background= "gray";
     const time = new Date()
     let headline= document.getElementById("headline5").innerText;
     createElement(headline,time);
})
document.getElementById("button6").addEventListener("click", function(){
     buttonEfect();
     document.getElementById("button6").disabled=true;
     document.getElementById("button6").style.background= "gray";
     const time = new Date()
     let headline= document.getElementById("headline6").innerText;
     createElement(headline,time);
})
