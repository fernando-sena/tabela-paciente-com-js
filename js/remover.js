let tbl = document.querySelector("table")

tbl.addEventListener("dblclick" , function(e){
    e.target.parentNode.classList.add("fadeOut")
    
    setTimeout(function(){
        e.target.parentNode.remove()
    },500)
    
})





