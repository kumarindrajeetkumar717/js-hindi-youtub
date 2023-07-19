document.getElementById('owl').onclick = function(){
    alert("owl clicked again");
}

document.getElementById("owl").addEventListener('click', function(e){
 console.log(e);
},false)

