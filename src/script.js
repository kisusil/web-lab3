function showThanksForForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (!name || name.trim() === "") {
        return false;
    }

    if (!email || email.trim() === "") {
        return false;
    }

    let beforeComponent = document.getElementById("action-component-before");
    let afterComponent = document.getElementById("action-component-after");

    beforeComponent.style.display = "none";
    afterComponent.style.display = "flex";

    return false;
}

window.onload = () => {
    document.SLIDES = document.querySelectorAll("div.swiper-slide");
    document.SLIDER_INDEX = 1;

    makeOpacityAndHideExtraButtons();
};

function makeOpacityAndHideExtraButtons() {
    let leftIndex;
    let rightIndex;

    if (document.SLIDER_INDEX === 0) {
        leftIndex = undefined;
        rightIndex = 1;
    }

    if (document.SLIDER_INDEX === 1) {
        leftIndex = 0;
        rightIndex = 2;
    }

    if (document.SLIDER_INDEX === 2) {
        leftIndex = 1;
        rightIndex = undefined;
    }

    if (leftIndex !== undefined) {
        makeOpacityAndHideExtraButtonsForSlide(document.SLIDES[leftIndex]);
    }

    if (rightIndex !== undefined) {
        makeOpacityAndHideExtraButtonsForSlide(document.SLIDES[rightIndex]);
    }

    makeSlideVisible(document.SLIDES[document.SLIDER_INDEX]);
}

function makeOpacityAndHideExtraButtonsForSlide(slide) {
    let buttonsWrapper = slide.querySelector("div.swiper-control-buttons");
    buttonsWrapper.style.display = "none";

    let image = slide.querySelector("img");
    image.style.opacity = "0.6";
}

function makeSlideVisible(slide) {
    let buttonsWrapper = slide.querySelector("div.swiper-control-buttons");
    buttonsWrapper.style.display = "flex";

    let image = slide.querySelector("img");
    image.style.opacity = "1";
}

function moveSlidesDependingOnSliderIndex() {
    if (document.SLIDER_INDEX === 1) {
        document.SLIDES.forEach((slide) => {
            slide.style.transition = "left 300ms linear";
            slide.style.left = "0";
        });
    }

    if (document.SLIDER_INDEX === 0) {
        document.SLIDES.forEach((slide) => {
            slide.style.transition = "left 300ms linear";
            slide.style.left = "+" + (slide.offsetWidth + 70);
        });
    }

    if (document.SLIDER_INDEX === 2) {
        document.SLIDES.forEach((slide) => {
            slide.style.transition = "left 300ms linear";
            slide.style.left = "-" + (slide.offsetWidth + 70);
        });
    }
}

function slideNext() {
    document.SLIDER_INDEX += 1;
    if (document.SLIDER_INDEX > 2) {
        document.SLIDER_INDEX = 2;
    }
    makeOpacityAndHideExtraButtons();
    moveSlidesDependingOnSliderIndex();
}

function slidePrev() {
    document.SLIDER_INDEX -= 1;
    if (document.SLIDER_INDEX < 0) {
        document.SLIDER_INDEX = 0;
    }
    makeOpacityAndHideExtraButtons();
    moveSlidesDependingOnSliderIndex();
}