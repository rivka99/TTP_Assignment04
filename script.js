let btnAEl = document.querySelector(".btn-a")
let btnBEl = document.querySelector(".btn-b")
let parEl = document.querySelector(".par-a")
let hoverEl = document.querySelector(".hover-section")
const submitEl = document.querySelector(".submit-btn")
const userEl = document.querySelector("#user")
const emailEl = document.querySelector("#email")
const passEl = document.querySelector("#password")
const formHEl = document.querySelector(".form-h1")
const radResEl = document.querySelector(".rad-res")
const radiusEl = document.querySelector("#radius")
let formAns = []
let alerted = false;

/* The two listeners below work with two buttons, A and B
these are two buttons that argue with each other. When one is clicked it
says "I'm right" and when the other is clicked it says "No, I'm right"*/
btnAEl.addEventListener("click", function(){
    parEl.textContent = `"I'm Right"`
    console.log("a")
})

btnBEl.addEventListener("click", function(){
   
    parEl.textContent = `"No, I'm Right!"`
    console.log("a")
})
/*The below event listener tracks an image on the page. When a user hovers
over this image, they get alerted that they should not have hovered on the image
- above the image on the html page is a warning not to hover over it*/ 
hoverEl.addEventListener("mouseover",function(){
    alert("YOU SHOULDN'T HAVE HOVERED!")
})
/* This function handles the form from the html file. When this form is submitted
via the submit button element, the form first creates an array with the four elements
from the form. It uses this array to track the submitted values */
submitEl.addEventListener("click", function() {
        formAns=[]
        alerted = false;
        formAns.push(userEl.value)
        formAns.push(emailEl.value)
        formAns.push(passEl.value)
        formAns.push(radiusEl.value)
        //this condition checks if the password is right. If it is it lets the 
        //user know the form was submitted, otherwise it alerts the user of wrong password
        if(formAns[2]==12345678){
            formHEl.textContent = "Your form was successfully submitted."
            /* within this conditional is this second conditional that is 
            checking to see if the user chose to provide a radius value. If
            the user did, it then checks if the value is allowed, if so, it returns the
            volume of the sphere, otherwise it lets the user know about the issue. */
            if(!(formAns[3]==="")){
                if(formAns[3]>0){
                    radResEl.textContent = "The volume of your sphere is " + (Math.pow(formAns[3],3)*Math.PI*(4/3)).toFixed(2)
                }else{
                    radResEl.textContent = "The radius of your sphere needs to be more than 0!"
                }
                
            }else{
                radResEl.textContent = ""
            }
        } else{
            alert("Password is incorrect!!!")
            formHEl.textContent = "You haven't submitted the form."
            alerted = true
            formAns = []
        }
        //this conditional ensures that the form does not get submitted until the password is correct
        //if the password is incorrect alerted is set to true, and the form is only submitted
        //once alerted is set to false at the end of the event listener. This will only happen 
        //if, when the submit button is clicked, the password is right
        //once the submission has no issues, the values are reset so that the form can be submitted again.
        if(alerted===false){
            userEl.value=""
            passEl.value=""
            emailEl.value=""
            radiusEl.value=""
        }
        
    })
