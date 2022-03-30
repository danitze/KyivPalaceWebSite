const pageCapacity = 6;

let catalogItems = document.getElementsByClassName("catalog_item_background");
let pages = [];
let activePage = 0;

function initPages() {
    let pagesAmount = catalogItems.length / pageCapacity;
    if(pagesAmount == 0) {
        return;
    }
    let pagingList = document.getElementById("paging_list");
    for(var i = 0; i < pagesAmount; ++i) {
        let a = document.createElement("a");
        a.href = "#main_content";
        a.appendChild(document.createTextNode(i + 1));
        a.classList.add("hover");
        a.id = i;
        pages.push(a);
        let li = document.createElement("li");
        li.appendChild(a);
        pagingList.appendChild(li);
    }
    pages[0].classList.add("selected");
    showPage(0);
    activePage = 0;
    for(let page of pages) {
        page.onclick = onPageClick;
    }
}

function onPageClick() {
    pages[activePage].classList.remove("selected");
    activePage = this.id;
    pages[activePage].classList.add("selected");
    showPage(activePage);
}

function showPage(pageNum) {
    let startIndex = pageCapacity * pageNum;
    let endIndex = startIndex + pageCapacity;
    for(let i = 0; i < catalogItems.length; ++i) {
        if(i >= startIndex && i < endIndex) {
            catalogItems[i].style.display = "flex";
        } else {
            catalogItems[i].style.display = "none";
        }
    }
}

window.addEventListener('load', initPages);