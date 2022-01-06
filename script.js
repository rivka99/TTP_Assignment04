let btnAEl = document.querySelector(".btn-a")
let btnBEl = document.querySelector(".btn-b")
let parEl = document.querySelector(".par-a")
let hoverEl = document.querySelector(".hover-section")
const submitEl = document.querySelector(".submit-btn")
const userEl = document.querySelector("#user")
const emailEl = document.querySelector("#email")
const passEl = document.querySelector("#password")
const formHEl = document.querySelector(".form-h1")
let formAns = []
let alerted = false;
btnAEl.addEventListener("click", function(){
    parEl.textContent = `"I'm Right"`
    console.log("a")
})

btnBEl.addEventListener("click", function(){
   
    parEl.textContent = `"No, I'm Right!"`
    console.log("a")
})

hoverEl.addEventListener("mouseover",function(){
    alert("YOU SHOULDN'T HAVE HOVERED!")
})

submitEl.addEventListener("click", function() {
        alerted = false;
        formAns.push(userEl.value)
        formAns.push(emailEl.value)
        formAns.push(passEl.value)
        if(formAns[2]==12345678){
            formHEl.textContent = "Your form was successfully submitted."
        } else{
            alert("Password is incorrect!!!")
            alerted = true
            formAns = []
        }
        if(alerted===false){
            userEl.value=""
            passEl.value=""
            emailEl.value=""
        }
        
    })
