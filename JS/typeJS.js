
const nameInput = document.getElementById("name-input");
const btn=document.getElementById('button-theme')
const theme = document.getElementById('theme-link')
let select = document.querySelector('select');
const passInput = document.getElementById("user-type");
const responseInput = document.getElementById("user-response");
let userType;
const usertype = document.getElementById("user-type").index
let textArea = document.getElementById('textArea');
//
nameInput.addEventListener("input", ()=> {
    nameInputValue = nameInput.value
})
nameInput.oninput = function () {
    document.getElementById("user-type").disabled = nameInputValue.length < 3;
}
nameInput.addEventListener("blur", () => {
    if (nameInputValue.length <3) {
        window.alert("Имя должно быть не меньше трех символов")
    }
})

//
select.addEventListener('change', ()=>{
    userType = select.value;
    document.getElementById("user-response").disabled = false;
})
//
function clickHandler(){
    const button =document.querySelector("#submit");
    button.className ="button-submit"
}
//
select.addEventListener('change', ()=>{
    userType = select.value;
    document.getElementById("user-response").disabled = false;
})
//
select.addEventListener('change', ()=>{
    userType= select.value;
    document.getElementById("form-name").disabled = false;
})
btn.addEventListener('click', function (){
    if (theme.getAttribute("href")==="style/light-style.css") {
        theme.setAttribute('href', "style/black-style.css")
        btn.firstChild.data="Светлая"
    } else {
        theme.setAttribute('href', "style/light-style.css")
        btn.firstChild.data="Темная"
    }
})