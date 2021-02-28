/*******  ALL BUTTONS *******/
const btns = document.querySelectorAll(".btn")
for (const butt of btns) {
  butt.addEventListener('click', function(e) {
    //alert('click');
    e.preventDefault()
    console.log(this.href)
  })
}
/** 
* SCROLL TO TOP BUTTON
* https://dev.to/ljcdev/scroll-to-top-button-in-vanilla-js-beginners-2nc
*/
let scrollToTopBtn = document.querySelector(".btnScrollToTop")
let rootElement = document.documentElement
const ToggleRatio = 0.20

function handleScroll() {
  // do something on scroll
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal) > ToggleRatio) {
    //show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    //hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() { 
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)

/** 
* NAVIGATION
* 
*/
/* UPDATE ACTIVE PAGE ON NAV MENUS */
document.addEventListener("DOMContentLoaded", function(event) { 
  updateMenu('home',true)
});
const updateMenu = (inPg, isInit=false) =>{    
  let pgName = document.getElementsByClassName("pg-name")
  let navBar = document.getElementsByClassName("header__nav-bar--link");

  let currPg = pgName[0].innerText    
  pgName[0].innerText = inPg
  for (let i = 0; i < navBar.length; ++i) {
    // TODO: CHANGE TO HREF
      let linkTitle = navBar[i].getAttribute("title"); 

      if (linkTitle.includes(currPg) && !isInit){
          navBar[i].parentNode.classList.remove("is-current-page") 
          navBar[i].classList.remove("is-current-page") 

      }else if (linkTitle.includes(pgName[0].innerText)){
          navBar[i].parentNode.classList.add("is-current-page")   
          navBar[i].classList.add("is-current-page")   
          
      }
  }
}

/* Do Burger Click */
const navContainer = document.querySelector(".header__nav-bar");
const burger = document.querySelector(".nav-burger");

burger.addEventListener("click", () => {
    burger.classList.toggle("clicked");
    navContainer.classList.toggle("show-nav-bar");  
});

/** 
* SITE POLICY MODAL
*/

const getModalContent = (inPolicy,inTit) =>{	
  fetch('http://localhost/Mojo-Impact/php_scripts/fetchModalContent.php', {
    method: 'POST',      
    body: JSON.stringify({
      title: inTit   
    })    
  }).then(function(response) {
    response.text().then(function(text) {    
      document.getElementById("modal-content").innerHTML = text
    });

    //this.preventDefault()
  });
}

!function(){var t,n,e,o,l,c,a,d,i,m,u,s;(
  t="data-target",
  n="is-active",
  e=".modal-button",
  o=".modal-close",
  l=".modal-button-close",
  c=".modal-background",
  a=function(e,t){
    document.querySelectorAll(e).forEach(function(e){e.addEventListener("click",t)})},
    d=function(){document.querySelectorAll("."+n).forEach(function(e){e.classList.remove(n)}),
    s()},i=function(){var e=this.getAttribute(t);u(),document.getElementById(e).classList.add(n)},
    m=function(){var e=this.parentElement.id;document.getElementById(e).classList.remove(n),s()},
    u=function(){document.getElementsByTagName("html")[0].style.overflow="hidden",
    document.getElementsByTagName("body")[0].style.overflowY="scroll"},
    s=function(){document.getElementsByTagName("html")[0].style.overflow="",
    document.getElementsByTagName("body")[0].style.overflowY=""},
    {init:function(){a(e,i),a(o,m),a(l,d),a(c,m),
      document.addEventListener("keyup",
      function(e){
        27==e.key&&d()
      })
    }}).init()}();
