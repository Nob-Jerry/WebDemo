

const nav = document.querySelector('main')
fetch('main.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})