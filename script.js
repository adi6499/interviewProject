let sentForm = document.querySelector(".sentForm")
let message = document.querySelector(".message")
let closeForm = document.querySelector(".closeForm")
let close = document.querySelector(".close")
let popupMessage = document.querySelector(".popupMessage")
window.addEventListener("scroll",()=>{
    let body = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = body/height * 100
    
    if(scrolled >= 73){
        sentForm.classList.add("sentFormOpacity")
        message.innerHTML=`Its seem you scrolled ${Math.floor(scrolled)}% please submit your response what where i can make right`
    }


})

closeForm.addEventListener("click",()=>{
    sentForm.style.display="none"
})


close.addEventListener("click",()=>{
popupMessage.style.display="none"
})