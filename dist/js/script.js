window.addEventListener('DOMContentLoaded', () => {
   
    // Hamburger

    const menu = document.querySelector('.header__nav'),
    menuItem = document.querySelectorAll('.header__nav_item'),
    hamburger = document.querySelector('.header__nav_hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__nav_hamburger_active');
        menu.classList.toggle('header__nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__nav_hamburger_active');
            menu.classList.toggle('header__nav_active');
        });
    });

    // Slider

    const slides = document.querySelectorAll('.customer__slide'),
          prev = document.querySelector('.customer__prev'),
          next = document.querySelector('.customer__next');
    let slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(n) {
        console.log(n);
        
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');

        console.log(slideIndex);
        slides[slideIndex - 1].style.display = 'block';
    }


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }


    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    next.addEventListener('click', () => {
        plusSlides(+1);
    });

});