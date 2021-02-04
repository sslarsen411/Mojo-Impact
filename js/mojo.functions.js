/** 
* SCROLL TO TOP BUTTON
* https://dev.to/ljcdev/scroll-to-top-button-in-vanilla-js-beginners-2nc
*/
let btnScrollToTop= document.querySelector(".btnScrollToTop")
let rootElement = document.documentElement

function handleScroll() {
  // do something on scroll
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.40) {
    //show button
    btnScrollToTop.style.display = "block"
  } else {
    //hide button
    btnScrollToTop.style.display = "none"
  }
}

function scrollToTop() {
  //scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
btnScrollToTop.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)


function myFunction() {
    //let tits =  document.getElementById("pg-name").innerHTML
   // let x = "hi"
   //alert('click')
   let tits =  document.getElementById("pg-name")
    //let pg = document.getElementById("contact")
    console.log(tits.innerHTML)
    tits.innerHTML = "Hello World";
    document.getElementById("home").classList.remove("is-active")
    document.getElementById("contact").classList.add("is-active")
  }


//alert(x)