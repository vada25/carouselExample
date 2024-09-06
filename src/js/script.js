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

    
});