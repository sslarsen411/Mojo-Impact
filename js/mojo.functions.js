/** 
* GLOBAL VALUES
*/
const rootEle        = document.documentElement,
      scrollToTopBtn = document.querySelector(".btnScrollToTop"),
      header         = document.querySelector("header"),
      scrollTopConst = 50,
      ToggleRatio    = 0.20,
      pgName         = document.getElementsByClassName("pg-name"),
      navBar         = document.getElementsByClassName("nav-bar__link"),
      navContainer   = document.querySelector(".nav-bar"),
      burger         = document.querySelector(".nav-burger"),
      btns           = document.querySelectorAll(".btn"),
      modal          = document.getElementsByClassName('modal')[0],
      btnClose       = document.querySelectorAll(".modal__close"),
      mdlID          = document.getElementById('policy-modal'),
      hasHero        = document.getElementsByClassName("hero")

/*******  ALL BUTTONS ******
for (const butt of btns) {
  butt.addEventListener('click', function(e) {
    e.preventDefault()
    console.log(this.href)
  })
}
*/ 
const noLinks = document.querySelectorAll(".isDisabled")
for (const noLink of noLinks) {
  noLink.addEventListener('click', function(e) {   
    e.preventDefault()
  })
}

/** 
* SCROLL EVENTS
*/
/* CHANGE HEADER BACKGROUND */
if(hasHero.length == 0){header.classList.add("bg-black")} // CHANGE ON HERO ONLY
const colorHeader = () => {
  if(hasHero.length > 0){
    if ( rootEle.scrollTop < scrollTopConst) {
      header.classList.remove("bg-black")
      header.classList.add("bg-trans")
    } else {
      header.classList.remove("bg-trans")
      header.classList.add("bg-black")
    }
  }  
}
/* ADD SCROLL TO TOP BUTTON */
const handleScroll = () => {
  let scrollTotal = rootEle.scrollHeight - rootEle.clientHeight
  if ((rootEle.scrollTop / scrollTotal) > ToggleRatio) {
    scrollToTopBtn.classList.add("showBtn")
  } else {
    scrollToTopBtn.classList.remove("showBtn")
  }
}
const scrollToTop = () => { 
  rootEle.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
/* SCROLL LISTENERS */
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)
window.onscroll = function() {colorHeader()}

/** 
* NAVIGATION
*/
  /* UPDATE ACTIVE PAGE ON NAV MENUS */
document.addEventListener("DOMContentLoaded", function(event) { 
    updateMenu(document.getElementsByClassName("pg-name")[0].innerText,true)
});
/* LIVE*/
const updateMenu = (inPg, isInit=false) =>{  
  let currPg = pgName[0].innerText    
  pgName[0].innerText = inPg
  for (let i = 0; i < navBar.length; ++i) {    
      let linkTitle = navBar[i].getAttribute("href")
      if (linkTitle.includes(currPg) && !isInit){
          navBar[i].parentNode.classList.remove("is-current-page") 
          navBar[i].classList.remove("is-current-page") 
      }else if (linkTitle.includes(pgName[0].innerText)){
          navBar[i].parentNode.classList.add("is-current-page")   
          navBar[i].classList.add("is-current-page")
      }
  }
}
/* Handle Nav Burger Click */ 
burger.addEventListener("click", () => {
    burger.classList.toggle("clicked");
    navContainer.classList.toggle("show-nav-bar")
});

/** 
* SITE POLICY MODAL
*/   
const getModalContent = (inPolicy,inTitle) =>{
    fetch('http://localhost/Mojo-Impact/php_scripts/fetchModalContent.php', {
        method: 'POST',      
        body: JSON.stringify({
        type: inPolicy   
    })    
  }).then(function(response) {
    response.text().then(function(text) {    
      document.getElementById("policy").innerHTML = text
      document.getElementById("hdr_title").innerHTML = inTitle
    })
    modal.classList.add('modal--show')   
  });
}
for (const btn of btnClose) {
  btn.addEventListener('click', function(e) {   
    e.preventDefault()
    closeModal()
  })
}
window.onclick = function(event) {  //click outside of modal
  if (event.target == mdlID) {
    closeModal()
  }
}
const closeModal = () =>{
  modal.classList.remove('modal--show')
  modal.classList.add('modal--hide')  // Remove hide class after animation is done
  afterAnimation = function() {
    modal.classList.remove('modal--hide')
  }  
  modal.addEventListener("animationend", afterAnimation, false)
}