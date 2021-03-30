const menu = document.querySelector(".menu");
const bodyContainer = document.querySelector(".bodyContainer");
const close = document.querySelector(".close");
const close2 = document.querySelector(".close2");
const sideBarNav = document.querySelector(".sideBarNav");


menu.addEventListener("click", () => {
    sideBarNav.classList.remove("sideBarNav");
    sideBarNav.classList.add("sideBarNav2");
    document.body.style.overflowY = "hidden";
    menu.style.display = "none";
   //  close.classList.remove("close");
    close.classList.add("close2");
});

close.addEventListener("click", () => {
   sideBarNav.classList.add("sideBarNav");
    sideBarNav.classList.remove("sideBarNav2");
    document.body.style.overflowY = "scroll";
    menu.style.display = "block";
    close.classList.add("close");
    close.classList.remove("close2");
});