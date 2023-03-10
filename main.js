let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let close = document.querySelector("#close");
let lightBox = document.querySelector("#lightBox");
lightBox.classList.replace("d-flex", "d-none");
let row = document.querySelector("#row");
let item = document.querySelector("#item");
let imgSrc = [
  "img/portfolio-1.jpg",
  "img/portfolio-3.jpg",
  "img/portfolio-4.jpg",
  "img/work-1.jpg",
  "img/work-2.jpg",
  "img/work-3.jpg",
  "img/work-4.jpg",
  "img/work-5.jpg",
  "img/work-6.jpg",
];
(function () {
  let box = "";
  for (let i = 0; i < imgSrc.length; i++) {
    box += `
             <div class="col-md-6 col-lg-4">
                <div class="card position-relative">
                    <img src="${imgSrc[i]}" alt="" class="img-fluid">
                    <div
                        class="caption position-absolute bg-white p-3 start-50 bottom-0 my-3 translate-middle-x w-75 rounded">
                        <h2 class="text-capitalize ">item title ${i + 1}#</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
    `;
  }
  row.innerHTML = box;
})();
let imgs = document.querySelectorAll("img");
let globaleIndex;
imgs.forEach(function (ele, index) {
  ele.addEventListener("click", function (e) {
    globaleIndex = index;
    lightBox.classList.replace("d-none", "d-flex");
    let imgSrc = e.target.src;
    item.style.backgroundImage = `url(${imgSrc})`;
  });
});
next.addEventListener("click", nxtBtn);
function nxtBtn() {
  if (globaleIndex === imgs.length - 1) {
    globaleIndex = 0;
  } else {
    globaleIndex++;
  }
  let imgSrc = imgs[globaleIndex].src;
  item.style.backgroundImage = `url(${imgSrc})`;
}
prev.addEventListener("click", prevBtn);
function prevBtn() {
  if (globaleIndex === 0) {
    globaleIndex = imgs.length - 1;
  } else {
    globaleIndex--;
  }
  let imgSrc = imgs[globaleIndex].src;
  item.style.backgroundImage = `url(${imgSrc})`;
}
close.addEventListener("click", closeBtn);
function closeBtn() {
  lightBox.classList.replace("d-flex", "d-none");
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nxtBtn();
  } else if (e.key === "ArrowLeft") {
    prevBtn();
  } else if (e.key === "Escape") {
    closeBtn();
  }
});
