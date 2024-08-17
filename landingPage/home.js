const menuBtn = document.getElementById("menu-btn");
const navList = document.getElementById("nav-list");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e)=>{
    navList.classList.toggle("open");
    const isOpen=navList.classList.contains("open");
     menuBtnIcon.setAttribute("class",isOpen? "ri-close-line":"ri-menu-line");

});

navList.addEventListener("click", (e)=>{
    navList.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
});
