$(document).ready(function () {
    collapse()
})

function collapse() {
    let html = ''
    let arr = 0

    for (arr; arr <= 5; arr++) {
        html += '<div class="card">'
            html += `<div class="card-header" id="headding${arr}">`
                html += '<h3>Lorem ipsum</h3>'
                html += `<button onClick="handleCollapse('${arr}')"><img id="image${arr}" class="image-arrow" src="assets/img/icons/arrow-down-white.svg" alt="Arrow Down" /></button>`
            html += '</div>'
            html += `<div class="collapse" id="collapse${arr}">`
                html += '<div class="card-body">'
                    html += '<div class="info-body">'
                        html += '<img src="assets/img/background.png" alt="image"/>'
                        html += '<p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
        html += '</div>'

        $('#accordion-collapse').append(html)
        html = ''
    }
}

function handleCollapse(i) {
    let index = 'collapse' + i
    let elem = document.getElementById(index)
    let elem_header = $('#headding' + i)
    let elem_image = $('#image'+i)
    let list = elem.classList.value
    
    if (list.includes('show')) {
        elem.classList.remove('show')
        elem.classList.remove('collapse')
        elem.classList.add('collapsing')
        elem_header.css({
            'background': '#6F6F6F',
            'color': '#fff'
        })
        elem_image.attr('src', 'assets/img/icons/arrow-down-white.svg')
        elem_image.css({'transform': 'rotate(0deg)'})
        document.getElementsByClassName('collapsing')[0].style.height = '0px'
        setTimeout(() => {
            elem.classList.remove('collapsing')
            elem.classList.add('collapse')
        }, 500)
    } else {
        elem.classList.remove('collapse')
        elem.classList.add('collapsing')
        elem_header.css({
            'background': '#fff',
            'color': '#6F6F6F'
        })
        elem_image.attr('src', 'assets/img/icons/arrow-down.svg')
        elem_image.css({'transform': 'rotate(180deg)'})
        document.getElementsByClassName('collapsing')[0].style.height = '200px'
        setTimeout(() => {
            elem.classList.remove('collapsing')
            elem.classList.add('collapse')
            elem.classList.add('show')
        }, 700)

    }
}