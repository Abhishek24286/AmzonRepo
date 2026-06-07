
const nextBtn = document.querySelector('.button2');
const prevBtn = document.querySelector('.button1');
const mainContainer = document.querySelector('.header-image');
const slides = document.querySelectorAll('.common-image');

let index = 0;


nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlide();
});


prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});


function updateSlide() {
  mainContainer.style.transform = `translateX(-${index * 100}%)`;
}



setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlide();
}, 3000);   



