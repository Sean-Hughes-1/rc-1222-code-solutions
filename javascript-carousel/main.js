const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const dots = document.querySelectorAll('.carousel-dot');

const slideInterval = 3000;
let slideIndex = 0;
let autoSlideInterval;

function resetSlideIndex() {
  if (slideIndex >= carouselImages.length) {
    slideIndex = 0;
  }
}

function nextSlide() {
  slideIndex++;
  resetSlideIndex();
  setSlidePosition();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = carouselImages.length - 1;
  }
  setSlidePosition();
}

function setSlidePosition() {
  carouselSlide.style.transform = `translateX(-${slideIndex * 100 / carouselImages.length}%)`;
}

function setActiveDot() {
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  dots[slideIndex].classList.add('active');
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
    setActiveDot();
  }, slideInterval);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index;
    setSlidePosition();
    setActiveDot();
    stopAutoSlide();
    setTimeout(() => {
      startAutoSlide();
    }, slideInterval);
  });
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  setActiveDot();
  stopAutoSlide();
  setTimeout(() => {
    startAutoSlide();
  }, slideInterval);
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  setActiveDot();
  stopAutoSlide();
  setTimeout(() => {
    startAutoSlide();
  }, slideInterval);
});

startAutoSlide();
