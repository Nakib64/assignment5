document.getElementById("clearbtn").addEventListener("click", function(){
    const div = document.getElementById("submision");
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
})