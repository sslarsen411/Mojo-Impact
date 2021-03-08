/*******  ALL BUTTONS *******/
const btns = document.querySelectorAll(".btn")
for (const butt of btns) {
  butt.addEventListener('click', function(e) {
    //alert('click');
    e.preventDefault()
    console.log(this.href)
  })
}

const noLinks = document.querySelectorAll(".isDisabled")
for (const noLink of noLinks) {
  noLink.addEventListener('click', function(e) {   
    e.preventDefault()
  })
}

/** 
* SCROLL TO TOP BUTTON
* https://dev.to/ljcdev/scroll-to-top-button-in-vanilla-js-beginners-2nc
*/
let scrollToTopBtn = document.querySelector(".btnScrollToTop")
let rootElement = document.documentElement
const ToggleRatio = 0.20
const handleScroll = () => {
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal) > ToggleRatio) {
    scrollToTopBtn.classList.add("showBtn")
  } else {
    scrollToTopBtn.classList.remove("showBtn")
  }
}
const scrollToTop = () => { 
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)

/** 
* NAVIGATION
*/
  /* UPDATE ACTIVE PAGE ON NAV MENUS */

document.addEventListener("DOMContentLoaded", function(event) { 
    updateMenu(document.getElementsByClassName("pg-name")[0].innerText,true)
});
/* LIVE*/
const updateMenu = (inPg, isInit=false) =>{    
  let pgName = document.getElementsByClassName("pg-name"),
      navBar = document.getElementsByClassName("nav-bar__link");

  let currPg = pgName[0].innerText    
  pgName[0].innerText = inPg
  for (let i = 0; i < navBar.length; ++i) {    
      let linkTitle = navBar[i].getAttribute("href"); 

      if (linkTitle.includes(currPg) && !isInit){
          navBar[i].parentNode.classList.remove("is-current-page") 
          navBar[i].classList.remove("is-current-page") 

      }else if (linkTitle.includes(pgName[0].innerText)){
          navBar[i].parentNode.classList.add("is-current-page")   
          navBar[i].classList.add("is-current-page")
      }
  }
}
/* Handle Burger Click */
const navContainer = document.querySelector(".nav-bar"),
      burger = document.querySelector(".nav-burger")
burger.addEventListener("click", () => {
    burger.classList.toggle("clicked");
    navContainer.classList.toggle("show-nav-bar");  
});

/** 
* SITE POLICY MODAL
*/
const   modal  = document.getElementsByClassName('modal')[0],
        btnClose  = document.querySelectorAll(".modal__close"),
        mdlID =  document.getElementById('policy-modal')
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
    closeModal();
  })
}
window.onclick = function(event) {  //click outside of modal
  if (event.target == mdlID) {
    closeModal();
  }
}
const closeModal = () =>{
  modal.classList.remove('modal--show');
  modal.classList.add('modal--hide');  // Remove hide class after animation is done
  afterAnimation = function() {
    modal.classList.remove('modal--hide');
  }  
  modal.addEventListener("animationend", afterAnimation, false);
}