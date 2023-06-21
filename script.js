//your code here
const info = document.querySelector('.info')
const name = document.getElementById('name')
const image = document.getElementById('image')
const ageBtn = document.getElementById('age')
const emailBtn = document.getElementById('email')
const phoneBtn = document.getElementById('phone')
const getUserCall = document.getElementById("getUser")
let age = "";
let username = ""
let picture = "";
let email = "";
let phone = ""
async  function getUser(){
 fetch('https://randomuser.me/api/')
 .then((response)=>response.json())
 .then((data)=>data.results[0])
 .then((data)=>{
    info.textContent=""
    phone = data.cell
    age = data.dob.age
    email=data.email;
    username=data.name.first + " " + data.name.last
    name.innerText =username
    picture = data.picture.large
    image.src=picture
    ageBtn.addEventListener('click' ,function(){
        info.textContent=age
    })
    emailBtn.addEventListener('click' ,function(){
        info.textContent=email
    })
    phoneBtn.addEventListener('click' ,function(){
        info.textContent=phone
    })
});
    
}
getUser()
getUserCall.addEventListener(("click"),getUser)
