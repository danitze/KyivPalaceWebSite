let imgLinks = [
    "../img/building1.jpg",
    "../img/building2.jpg",
    "../img/room1.jpg",
    "../img/room2.jpg",
    "../img/rooms.jpg"
]

let slidesArr = [];
let slidesDots = [];

let currentImageNum = 0;

let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

let interval = window.setInterval(nextClick, 4000);

function calculatePrevImageNum() {
    if(currentImageNum == 0) {
        return imgLinks.length - 1;
    }
    return currentImageNum - 1;
}

function calculateNextImageNum() {
    return (currentImageNum + 1) % imgLinks.length;
}

function setBackground(imgView, imgLink) {
    imgView.style.backgroundImage = "url('" + imgLink + "')";
    imgView.style.backgroundRepeat = "no-repeat";
    imgView.style.backgroundPosition = "center";
    imgView.style.backgroundSize = "cover";
}

function nextClick() {
    resetTimer();

    slidesArr[currentImageNum].style.opacity = '';
    unselectDot(slidesDots[currentImageNum]);
    currentImageNum = calculateNextImageNum();
    slidesArr[currentImageNum].style.opacity = 1;
    selectDot(slidesDots[currentImageNum]);
}

function prevClick() {
    resetTimer();

    slidesArr[currentImageNum].style.opacity = '';
    unselectDot(slidesDots[currentImageNum]);
    currentImageNum = calculatePrevImageNum();
    slidesArr[currentImageNum].style.opacity = 1;
    selectDot(slidesDots[currentImageNum]);
}

function dotClick(dotNum) {
    resetTimer();

    slidesArr[currentImageNum].style.opacity = '';
    unselectDot(slidesDots[currentImageNum]);
    currentImageNum = dotNum;
    slidesArr[currentImageNum].style.opacity = 1;
    selectDot(slidesDots[currentImageNum]);
}

function resetTimer() {
    window.clearInterval(interval);
    interval = window.setInterval(nextClick, 4000);
}

function selectDot(dot) {
    dot.classList.add("selected_control");
    dot.classList.remove("control");
}

function unselectDot(dot) {
    dot.classList.remove("selected_control");
    dot.classList.add("control");
}

window.addEventListener('load', () => {
    let slides = document.getElementById('slides');
    let controls = document.getElementById('controls');
    for(let link of imgLinks) {
        let slide = document.createElement("div");
        slide.classList.add("slide");
        setBackground(slide, link);
        slides.appendChild(slide);
        slidesArr.push(slide);

        let dot = document.createElement("div");
        dot.classList.add("control");
        slidesDots.push(dot);
        controls.appendChild(dot);
    }
    slidesArr[currentImageNum].style.opacity = 1;
    slidesDots[currentImageNum].classList.remove("control");
    slidesDots[currentImageNum].classList.add("selected_control");

    for(let i = 0; i < slidesDots.length; ++i) {
        slidesDots[i].addEventListener('click', () => {
            dotClick(i);
        })
    }

    nextButton.onclick = nextClick;
    prevButton.onclick = prevClick;
});