// Functions helper

// next / previous slide
function scroll_slides(n) {
    show_slides(slide_index += n);
}

// thumbnail image controls
function current_slide(n) {
    show_slides(slide_index = n);
}

/**
** display the requested slide, hide the others
** @param {int} : requested index of a picture
** @returns {undefined}
*/
function show_slides(n) {
    // if the requested index is above the end of the serie,
    // show the first picture
    if (n > dom.slides.length) {
        slide_index = 1;
    }

    // if the requested index is below the beginning of the serie,
    // show the last picture
    if (n < 1) {
        slide_index = dom.slides.length;
    }

    // hide all the pictures
    for (let i = 0; i < dom.slides.length; i++) {
        dom.slides[i].style.display = "none";
    }

    for (let i = 0; i < dom.dots.length; i++) {
        dom.dots[i].className = dom.dots[i].className.replace(" active", "");
    }

    dom.slides[slide_index - 1].style.display = "flex";
    dom.dots[slide_index - 1].className += " active";
}