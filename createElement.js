function createElement(headline,time){
    const p = document.createElement('p');
    p.innerText= `you have successfully completed ${headline} at ${time.getHours()}: ${time.getMinutes()}: ${time.getSeconds()} `
    p.classList.add("submision")
    document.getElementById("submision").appendChild(p);
}

const a = document.getElementById("next");
a.addEventListener("click", function(){
    window.location.href= "main.html";
})