$(document).ready(function () {
    carousel()  
})

function carousel () {
    let html = ''

    let arr = 0

    for(arr; arr < 3; arr++) {
        html += `<li id="indicator${arr}" data-target="#slider-pictures" onclick="handleChangeHeroSlide('${arr}')"></li>`
        $('#indicators').append(html)
        if (arr === 0) {
            $('#indicator'+arr).addClass('active')
        }
        html = ''

        html += `<div class="carousel-item">`
            html += '<div class="background-hero"></div>'
        html += '</div>'
        $('#carousel-component').append(html)

        html = ''
    }
    
}


let counter = 0

function handleChangeHeroSlide (i) {
    if (counter === i) return;

    $('#indicator'+counter).removeClass("active")
    $('#indicator'+i).addClass("active")

    counter = i
    
    const carouselInner = document.querySelector('.carousel-inner')
    const carouselItem = document.querySelectorAll('.carousel-inner .carousel-item')
    const itemSize = carouselItem[0].clientWidth
    carouselInner.style.transition = "transform .4s ease-in-out"
    carouselInner.style.transform = 'translateX(' + (-itemSize * i) + 'px)'
}