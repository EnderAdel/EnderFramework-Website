if(document.querySelector("div.m h1.m") !== null){
  //
  var button = document.getElementById("down"), bar = document.getElementsByClassName("bar")[0], topV = document.querySelector("div.m h1.m").offsetTop - 43;
  window.onscroll = function(){
    //button;
    var v = (window.scrollY/window.screen.height)*1.6;
    button.style.opacity = 1 - ((v < 1) ? v : 1);
    //document.querySelector("div.m h1.m").offsetTop
    //if(window.scrollY >= window.screen.height*0.38)
    if(window.scrollY >= topV)
      bar.setAttribute("show", "");
    else
      bar.removeAttribute("show");
  };
  button.addEventListener("click", function(){
    //document.getElementsByClassName("s")[0].scrollIntoView();
    //window.scrollTo(0, window.screen.height - 160);
    //window.scrollTo(0, document.getElementsByClassName("m")[0].offsetHeight);
    window.scrollTo(0, document.getElementsByClassName("m")[0].offsetHeight - 40);
  });
  //
}
let loop = setInterval(() => {
  if(document.readyState === 'complete'){
    clearInterval(loop);
    document.getElementById("loadingScreen").outerHTML = "";
    document.body.style.overflow = "auto";
  }
}, 100);

var menu = document.getElementsByClassName("menu")[0], openMenu = document.getElementById("showMenuButton"), hideMenu = document.getElementById("hideMenuButton");
openMenu.addEventListener("click", function(){
  openMenu.style.display = "none";
  hideMenu.style.display = "block";
  menu.setAttribute("show", "");
  var all = document.querySelectorAll(".menu .c .option");
  for(var i = 0; i < all.length; i++){
    (function(){
      const a = all, i_ = i;
      setTimeout(function(){
        a[i_].style.display = "block";
      }, i_*25);
    })();
  }
});
hideMenu.addEventListener("click", function(){
  hideMenu.style.display = "none";
  openMenu.style.display = null;
  menu.removeAttribute("show");
  setTimeout(function(){
    var all = document.querySelectorAll(".menu .c .option");
    for(var i = 0; i < all.length; i++){
      all[i].style.display = "none";
    }
  }, 160);
});