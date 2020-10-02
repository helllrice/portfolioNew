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
        prevArrow: '<button class="my-slider__arrow">назад</button>',
        nextArrow: '<button class="my-slider__arrow">вперед</button>',
        adaptiveHeight: true
    });

    IMAGES.forEach(function(item) {
        const html = `
        <div class="my-slider__item">
            <img src="${ item } " alt="" class="my-slider__img">
            <div class="my-slider__hidden">
                <a href="#">подробнее</a>
            </div>
        </div>
        `
        $('#my-slider').slick('slickAdd', html);
        console.log(html)
    });
})


const progress = document.querySelector('.progress-done');


setTimeout(() => {
    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.style.opacity = 1;
}, 500);
