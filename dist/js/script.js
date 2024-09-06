document.addEventListener('DOMContentLoaded', function() {

    // hamburger

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('overlay');
    
    const body = document.body;
    
            // open and close menu 
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        overlay.classList.toggle('active');
        body.classList.toggle('body-no-scroll');
    });
            // close menu on overlay click
    overlay.addEventListener('click', () => {
        navLinks.classList.remove('open');
        overlay.classList.remove('active');
        body.classList.remove('body-no-scroll');
    });
   

    //carousel Three

    function carouselThree() {
        var width = window.innerWidth;
        var elements = document.querySelectorAll('.inner-item');

        elements.forEach(function(element) {
            if (width < 993) {
                element.classList.add('carousel-item');
                
            } else {
                element.classList.remove('carousel-item');
            }
        });
    }
    window.addEventListener('resize', carouselThree);
    carouselThree();

    //Modal

    const modal = document.getElementById('myModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeBtn = document.querySelector('.close-btn-two');

    openModalBtn.addEventListener('click', () => {
        modal.classList.add('showTwo');
        body.classList.add('body-no-scroll');
    });
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('showTwo');
        body.classList.remove('body-no-scroll');
    });
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('showTwo');
            body.classList.remove('body-no-scroll');
        }
    });

    
});