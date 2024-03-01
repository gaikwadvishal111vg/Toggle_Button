let modebtn = document.querySelector(".button");
let lightMode ="light";
let body=document.querySelector("body");

modebtn.addEventListener("click",() =>{
    if(lightMode === "light"){
        lightMode ="dark";
       // document.querySelector("body").style.backgroundColor = "black";
       // body.style.color = "white";
     body.classList.add("dark");
     body.classList.remove("light");
    }else{
        lightMode="light";
     body.classList.add("light");
     body.classList.remove("dark");
      // body.style.color = "white";
       // document.querySelector("body").style.backgroundColor = "white";
    }
});
