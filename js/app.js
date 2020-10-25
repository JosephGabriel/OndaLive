

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
window.addEventListener("load",()=>{
wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animate__animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    }
)
wow.init();
})

window.addEventListener("load",()=>{
    let counters = document.querySelectorAll(".number-spot")
    const speed = 200
    counters.forEach(counter =>{
        const updateCount = ()=>{
            const target = +counter.getAttribute("data-target")
            const count = +counter.innerText
            console.log("HHH")
            const inc = Math.ceil( target / speed)

            if(count < target){
                counter.innerText = count + inc
                setTimeout(updateCount,1)
            }

        }
        updateCount()
    })

    let parallax = document.getElementById("paral")
    window.addEventListener("scroll", () => {
        let offset = window.pageYOffset
        parallax.style.backgroundPositionY = `${Math.ceil(offset * 0.25)}px`
    })
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
window.addEventListener("load",()=>{
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animate__animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();
})

window.addEventListener("load",()=>{
        let counters = document.querySelectorAll(".number-spot")
        const speed = 200
        counters.forEach(counter =>{
            const updateCount = ()=>{
                const target = +counter.getAttribute("data-target")
                const count = +counter.innerText
                console.log("HHH")
                const inc = Math.ceil( target / speed)

                if(count < target){
                    counter.innerText = count + inc
                    setTimeout(updateCount,1)
                }

            }
            updateCount()
        })

        let parallax = document.getElementById("paral")
        window.addEventListener("scroll", () => {
            let offset = window.pageYOffset
            parallax.style.backgroundPositionY = `${Math.ceil(offset * 0.25)}px`
        })
})