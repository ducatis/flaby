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

    // const slides = document.querySelectorAll('.customer__slide'),
    //       prev = document.querySelector('.customer__prev'),
    //       next = document.querySelector('.customer__next');
    // let slideIndex = 1;

    // showSlides(slideIndex);

    // function showSlides(n) {
    //     console.log(n);
        
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     console.log(slideIndex);
    //     slides[slideIndex - 1].style.display = 'block';
    // }


    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }


    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(+1);
    // });


    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    const galleryControls = ['previous', 'next'];
    const galleryItems = document.querySelectorAll('.gallery-item');

    class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    // Update css classes for gallery
    updateGallery() {
        this.carouselArray.forEach(el => {
        el.classList.remove('gallery-item-1');
        el.classList.remove('gallery-item-2');
        el.classList.remove('gallery-item-3');
        el.classList.remove('gallery-item-4');
        el.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
        el.classList.add(`gallery-item-${i+1}`);
        });
    }

    // Update the current order of the carouselArray and gallery
    setCurrentState(direction) {

        if (direction.className == 'gallery-controls-previous') {
        this.carouselArray.unshift(this.carouselArray.pop());
        } else {
        this.carouselArray.push(this.carouselArray.shift());
        }
        
        this.updateGallery();
    }

    // Construct the carousel navigation
    // setNav() {
        // galleryContainer.appendChild(document.createElement('ul')).className = 'gallery-nav';

        // this.carouselArray.forEach(item => {
        //   const nav = galleryContainer.lastElementChild;
        //   nav.appendChild(document.createElement('li'));
        // }); 
    // }s

    // Construct the carousel controls
    setControls() {
        this.carouselControls.forEach(control => {
        galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;

        document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }
    
    // Add a click event listener to trigger setCurrentState method to rearrange carousel
    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];

        triggers.forEach(control => {
        control.addEventListener('click', e => {
            e.preventDefault();

            if (control.className == 'gallery-controls-add') {
            const newItem = document.createElement('img');
            const latestItem = this.carouselArray.length;
            const latestIndex = this.carouselArray.findIndex(item => item.getAttribute('data-index') == this.carouselArray.length)+1;

            // Assign the necessary properties for new gallery item
            Object.assign(newItem,{
                className: 'gallery-item',
                src: `http://fakeimg.pl/300/?text=${this.carouselArray.length+1}`
            });
            newItem.setAttribute('data-index', this.carouselArray.length+1);

            // Then add it to the carouselArray and update the gallery
            this.carouselArray.splice(latestIndex, 0, newItem);
            document.querySelector(`[data-index="${latestItem}"]`).after(newItem);
            this.updateGallery();

            } else {
            this.setCurrentState(control);
            }

        });
        });
    }
    }

    const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

    exampleCarousel.setControls();
    // exampleCarousel.setNav();
    exampleCarousel.useControls();



});