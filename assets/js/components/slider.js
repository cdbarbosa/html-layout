function carouselItem () {
    let html = ''
    let arr = 0
    
    for (arr; arr < 9; arr++) {
        setCard()
    }
}

function setCard () {
    let html = ''
    html += '<div class="card-transparent">'
        html += '<div class="card-transparent-header">'
            html += '<img src="assets/img/background.png" alt="Image"/>'
        html += '</div>'
        html += '<div class="card-transparent-body">'
            html += '<h3>Lorem Ipsum</h3>'
            html += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>'
        html += '</div>'
    html += '</div>'
    $('#carousel-third').append(html)
}

let counterItem = 0

function onRenderSlide () {
    const carouselInner = document.querySelector('.carousel-third-inner')
    const carouselItem = document.querySelectorAll('.carousel-third-inner .card-transparent')
    const itemSize = (carouselItem[0].clientWidth)*3
    carouselInner.style.transform = 'translateX(' + (-itemSize * (-1.08)) + 'px)'
}

function handleChange (type) {
    const carouselInner = document.querySelector('.carousel-third-inner')
    const carouselItem = document.querySelectorAll('.carousel-third-inner .card-transparent')
    const itemg = carouselItem[0].clientWidth
    carouselInner.style.transform = 'none'
    carouselInner.style.transition = "transform .4s ease-in-out"
    if (type === 'prev') {
        if (counterItem <= 0) return;
        counterItem--;
    } else if (type === 'next') {
        let aux = auxSizeWindown()
        if (counterItem >= (carouselItem.length - aux)) {
            carouselInner.style.transition = "none"
            counter = carouselItem.length - 7
            carouselInner.style.transform = 'translateX(' + (-itemg * counterItem) + 'px)'
            return;
        }
        counterItem++
    }
    carouselInner.style.transform = 'translateX(' + (-itemg * counterItem) + 'px)'
}

function auxSizeWindown () {
    if (window.innerWidth <= 1200 && window.innerWidth > 998) {
        return 3
    } else if (window.innerWidth <= 998 && window.innerWidth > 768) {
        return 2
    } else if (window.innerWidth <= 768) {
        return 1
    } else {
        return 1
    }

}