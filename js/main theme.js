let links=document.getElementsByClassName("active1");
let current=document.getElementsByClassName("active");
//dark and light mood
let moon=document.getElementById("moon");
//color of h3
let h3_1=document.getElementById("h3-1");
let h3_2=document.getElementById("h3-2");
let h3_3=document.getElementById("h3-3");


//navigation bar
for(let i=0;i<links.length;i++){
    links[i].addEventListener("click",function(){
        current[0].classList=current[0].classList.remove("active");
        this.classList += " active";
    })
}

//dark and light theme
moon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        moon.src="images/sun.png";
    }
    else{
        moon.src="images/moon.png";
    }
}
//h3 color



