const slides = document.querySelectorAll(".slide");
const nextBtn1 = document.querySelector(".nextBtn1");
const prevBtn1 = document.querySelector(".prevBtn1");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn1.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn1.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn1.style.display = "block";
  } else {
    nextBtn1.style.display = "none";
  }
  if (counter > 0) {
    prevBtn1.style.display = "block";
  } else {
    prevBtn1.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn1.style.display = "none";
