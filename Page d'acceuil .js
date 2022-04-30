const openNav=document.querySelector(".icon1");
const Menu=document.querySelector(".menu");
const PositionMenu=document.getBoundingClientRect().left;
openNav.addEventListener("click",()=>{
    if(PositionMenu<0){
        Menu.classList.add("monter");
    }
})



