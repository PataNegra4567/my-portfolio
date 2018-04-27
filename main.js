var appState={
    menuVisible:false
};

document.querySelector(".nav").classlist.add("hidden-mobile");

function toggleMenu() {
    if (appState.menuVisible) {
         appState.menuVisible=false;
         var nav=document.querySelector(".nav");
         nav.classList.add("hidden-mobile");
    } else {
        appState.menuVisible=true;
        var nav=document.querySelector(".nav");
        nav.classList.remove("hidden-mobile");
    }
}