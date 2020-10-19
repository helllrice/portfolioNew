const IMAGES = [ 
    'src/assets/image/123.jpg',
    'src/assets/image/123.jpg',
    'src/assets/image/123.jpg',
    'src/assets/image/123.jpg',
    'src/assets/image/123.jpg'
   ]

$(document).ready(function(){
    $('#my-slider').slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        centerPadding: '0px',
        prevArrow: '<a class="my-slider__arrow"><img src="src/assets/image/back.png" class="arrow__img"></a>',
        nextArrow: '<a class="my-slider__arrow"><img src="src/assets/image/next.png" class="arrow__img"></a>',
        adaptiveHeight: true
    });

    IMAGES.forEach(function(item) {
        const html = `
        <div class="my-slider__item">
            <img src="${ item } " alt="" class="my-slider__img">
            <div class="my-slider__hidden">
                <a href="#" class="slider-link">подробнее</a>
            </div>
        </div>
        `
        $('#my-slider').slick('slickAdd', html);
    });



    function renderProgressDone(){
        document.querySelectorAll('.progress-done').forEach(function(progress){
            setTimeout(() => {
                progress.style.width = progress.getAttribute('data-done') + '%';
                progress.style.opacity = 1;
            }, 500);
        });
    }
    
    
    
    (function() {
        let count = 0;
        var skills = document.getElementById('skills');
    
        var onScroll = function() {
            var bottom = document.documentElement.scrollTop +  document.documentElement.clientHeight;
            var skillsBottom = skills.offsetTop + skills.offsetHeight;
            if(count == 0 && bottom >= skillsBottom){
                count++;
                renderProgressDone();
            }
        } 
    
        var scroll = function(){
            onScroll();
            window.onscroll = onScroll;
        }
        
        scroll();
    })()
})















