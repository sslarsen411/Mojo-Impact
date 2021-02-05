/** 
* SCROLL TO TOP BUTTON
* https://dev.to/ljcdev/scroll-to-top-button-in-vanilla-js-beginners-2nc
*/
let btnScrollToTop= document.querySelector(".btnScrollToTop")
let rootElement = document.documentElement

const handleScroll = () => {  
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.40) {    
    btnScrollToTop.style.display = "block"
  } else {    
    btnScrollToTop.style.display = "none"
  }
}
const scrollToTop = () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
btnScrollToTop.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)

/** 
* UPDATE ACTIVE PAGE ON NAV
* 
*/
const updateMenu = (inTit) =>{    
  let pgName = document.getElementsByClassName("pg-name")
  let navBar = document.getElementsByClassName("nav-bar__link");

  let currPg = pgName[0].innerText    
  pgName[0].innerText = inTit
  for (var i = 0; i < navBar.length; ++i) {
    // TODO: CHANGE TO HREF
      let linkTitle = navBar[i].getAttribute("title"); 

      if (linkTitle.includes(currPg)){
          navBar[i].parentNode.classList.remove("is-active")            
      }else if (linkTitle.includes(pgName[0].innerText))
          navBar[i].parentNode.classList.add("is-active")        
  }
}




//alert(x)