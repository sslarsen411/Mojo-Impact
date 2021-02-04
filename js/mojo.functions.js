//alert("hi")

//let pg = document.getElementById("page-name").innerText
//let x = document.getElementById("page-name");
//let pg= x.innerText
//let y = "hi"
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