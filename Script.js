// When Clicking Search Button
var searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
    // to remove the other display
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active')
}
// When Clicking CAKE Button
var shoppingCart=document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = ()=>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    // to remove the other display
    loginForm.classList.remove('active');
    navbar.classList.remove('active')
}
// When Clicking Login button
var loginForm=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = ()=>{
    loginForm.classList.toggle('active');
    // to remove the other display
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active')
}
// @media query when clicking Menu Button
var navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
    // @media query
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}
//@MEDIA QUERY
window.onscroll=()=>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active')
}

// This is The Slider Js code

var swiper = new Swiper(".product-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    centredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
  // Swiper slider for Reviews
var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    centredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      // Media Query
      1020: {
        slidesPerView: 3,
      },
    },
  });