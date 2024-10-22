const $ = document
const  hamburgerMenu = $.querySelector('.hamburger-menu')
const  mobileMenu = $.querySelector('.menu')
const aboutUsImg = $.querySelector('.about-us__img')
const nextBtn = $.querySelector('.next-btn')
const scrollTop = $.querySelector('#scroll-top')
const menuItems = $.querySelectorAll('.header-menu__link')
const sections = $.querySelectorAll("main > section")
let gallery = [
        "./Image/jpg-img/girl-img.png",
        "./Image/jpg-img/boy-img.jpeg",
        "./Image/jpg-img/girl2-img.jpg",
        "./Image/jpg-img/boy2-img.jpeg",
        "./Image/jpg-img/boy3-img.jpeg",
    ]
let galleryIndex = 0

hamburgerMenu.addEventListener('click', ()=>{
    hamburgerMenu.classList.toggle('hamburger-menu--open')

    if(hamburgerMenu.classList.contains('hamburger-menu--open')){
        console.log('open')
        mobileMenu.classList.remove('-left-64')
        mobileMenu.classList.add('left-0')
    } else{
        console.log('close')
        mobileMenu.classList.remove('left-0')
        mobileMenu.classList.add('-left-64')
    }

})

nextBtn.addEventListener('click', function(){
    galleryIndex --
        if(galleryIndex < 0 ){
            galleryIndex = 4
        }
        aboutUsImg.setAttribute('src' , gallery[galleryIndex])
    })

scrollTop.addEventListener('click' , function (){
    window.scrollTo({ top: 0, behavior: 'smooth' })
})

//Scroll
function removeActiveClass(className){
    document.querySelector(`.${className}`).classList.remove(className)
}
const observer = new IntersectionObserver(observerHandler,{
    threshold: 0.5
});

function observerHandler(allSections) {
    allSections.map(section => {
        let sectionClassName = section.target.className
        let sectionMenuItem = document.querySelector(`.header-menu__link[data-section=${sectionClassName}]`)
        console.log(sectionClassName)
        if (section.isIntersecting){
            sectionMenuItem.classList.add("header-menu__item--active")
        } else {
            sectionMenuItem.classList.remove("header-menu__item--active")
        }
    })
}

sections.forEach(section => {
    observer.observe(section)
})

menuItems.forEach(item => {
    item.addEventListener("click",function (event){
        event.preventDefault()

        removeActiveClass("header-menu__item--active")

        item.classList.add("header-menu__item--active")


        let sectionClass = item.getAttribute("data-section")
        let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop

        window.scrollTo({
            top: sectionOffsetTop - 100,
            behavior : "smooth"
        })

    })
})

