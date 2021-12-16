function initCarousel() {
  const rightButton = document.querySelector(".carousel__arrow_right");
  rightButton.addEventListener("click", () => {
    const slide = document.querySelector(".carousel__slide");
    const inner = document.querySelector(".carousel__inner");
    const x = inner.getBoundingClientRect().left;
    const parentx = inner.parentElement.getBoundingClientRect().left;
    const Width = slide.offsetWidth;
    inner.style.transform = `translateX(${x - parentx - Width}px)`;
    leftButton.style.display = "";
    const nslides = inner.getElementsByClassName('carousel__slide').length;
    if (Math.abs(x) > (nslides - 3)* Width) {
      rightButton.style.display = "none";
    }
  });
  const leftButton = document.querySelector(".carousel__arrow_left");
  leftButton.addEventListener("click", () => {
    const slide = document.querySelector(".carousel__slide");
    const inner = document.querySelector(".carousel__inner");
    const x = inner.getBoundingClientRect().left;
    const Width = slide.offsetWidth;
    const parentx = inner.parentElement.getBoundingClientRect().left;
    inner.style.transform = `translateX(${x + Width - parentx}px)`;
    rightButton.style.display = '';
    const nslides = inner.getElementsByClassName('carousel__slide').length;
    if (Math.abs(x) < 3* Width / 2) {
      leftButton.style.display = "none";
    }
  });
  leftButton.style.display = "none";
}
