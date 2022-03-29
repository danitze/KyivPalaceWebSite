let sections = document.getElementsByClassName('section_name');

function showSection(section) {
    let subsectionsList = section.nextElementSibling;
    subsectionsList.style.maxHeight = subsectionsList.scrollHeight + 'px';
}

function hideSection(section) {
    let subsectionsList = section.nextElementSibling;
    subsectionsList.style.maxHeight = '0px';
}

function onSectionClick() {
    if(this.nextElementSibling.style.maxHeight == '0px') {
        showSection(this);
    } else {
        hideSection(this);
    }
}

function initListeners() {
    for(let section of sections) {
        section.onclick = onSectionClick;
    }
}

window.addEventListener('load', initListeners);