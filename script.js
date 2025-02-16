const menuClicked = document.querySelectorAll('.js__mobile--menu')

const mobileNav = document.querySelector('.js__mobile--nav')

menuClicked.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    mobileNav.classList.toggle('mobile__activated')
    window.document.body.classList.toggle('scroll-hidden')

    //savedata();
  })
})
