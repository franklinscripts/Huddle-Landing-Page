const hero = document.querySelector('.left');
const heroL = document.querySelector('.right');
const bod = document.querySelectorAll('.bod')
const transition1 = document.querySelector('.transition1')
const transition2 = document.querySelector('.transition2')
const tl =gsap.timeline()
gsap.from(hero,{
    duration: "2.5",
    ease:"power2.out",
    opacity: 0,
    x:-500
})

gsap.from(heroL,{
    duration: "2.5",
    ease:"power2.out",
    x:500,
    opacity:0
})
gsap.from(bod,{
    duration: "2.5",
    ease:"power2.out",
    y:500,
    opacity:0
})

