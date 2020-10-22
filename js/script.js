//let rellax = new Rellax(".rellax")

window.addEventListener("load",()=>{
        let loader = document.getElementById("loader")
        loader.classList.add("finish")
})

function countdown() {
        let now = new Date()
        let eventDate = new Date(2020, 11, 25)

        let currentTime = now.getTime()
        let eventTime = eventDate.getTime()

        let remTime = eventTime - currentTime

        let s = Math.floor(remTime / 1000)
        let m = Math.floor(s / 60)
        let h = Math.floor(m / 60)
        let d = Math.floor(h / 24)

        h %= 24
        m %= 60
        s %= 60

        h = (h < 10) ? "0" + h : h
        m = (m < 10) ? "0" + m : m
        s = (s < 10) ? "0" + s : s

        document.getElementById("days").innerText = d
        document.getElementById("hours").innerText = h
        document.getElementById("mins").innerText = m
        document.getElementById("segs").innerText = s

        setTimeout(countdown, 1000)

    }

window.addEventListener("load",()=>{
        setTimeout(countdown,1000)
})
window.addEventListener("load",()=>{
        const accordion = document.getElementsByClassName("ask")
        for (let i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener("click", function () {
                this.classList.toggle("active")
            })
        }
       
})

window.addEventListener("load",()=>{
const menuIcon = document.getElementById("nav-icon")
const menu = document.getElementById("navbar-list-mobile")

menuIcon.addEventListener("click", function(){
   menu.classList.toggle("active")
    console.log("hh")
})
})