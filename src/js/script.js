document.addEventListener('DOMContentLoaded', function() {

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