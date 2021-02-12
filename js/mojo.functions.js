/** 
* SCROLL TO TOP BUTTON
* https://dev.to/ljcdev/scroll-to-top-button-in-vanilla-js-beginners-2nc
*/
let scrollToTopBtn = document.querySelector(".btnScrollToTop")
let rootElement = document.documentElement
const ToggleRatio = 0.40

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
  //scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)


/* ALL .btn */
const btns = document.querySelectorAll(".btn")
for (const butt of btns) {
  butt.addEventListener('click', function() {
    alert('click');
  })
}




/** 
* UPDATE ACTIVE PAGE ON NAV
* 
*/
const updateMenu = (inTit) =>{    
  let pgName = document.getElementsByClassName("pg-name")
  let navBar = document.getElementsByClassName("nav-bar__link");

  let currPg = pgName[0].innerText    
  pgName[0].innerText = inTit
  for (let i = 0; i < navBar.length; ++i) {
    // TODO: CHANGE TO HREF
      let linkTitle = navBar[i].getAttribute("title"); 

      if (linkTitle.includes(currPg)){
          navBar[i].parentNode.classList.remove("is-active")            
      }else if (linkTitle.includes(pgName[0].innerText))
          navBar[i].parentNode.classList.add("is-active")        
  }
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
