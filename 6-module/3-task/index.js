import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.addCarousel();
    this.initCarousel();
    this.buttonPlus();
  }

  addCarousel() {
    this.container = createElement(`<div class="container" data-carousel-holder>
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">${this.addSlides()}</div>
    </div>
    </div>`);
  }

  addSlides() {
    return this.slides
      .map(
        (slide) =>
          `<div class="carousel__slide" data-id="${slide.id}">
  <img src="/assets/images/carousel/${
    slide.image
  }" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€${slide.price.toFixed(2)}</span>
    <div class="carousel__title">${slide.name}</div>
    <button type="button" class="carousel__button" data-id="${slide.id}" >
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>`
      )
      .join("");
  }

  initCarousel() {
    const rightButton = this.container
      .getElementsByClassName("carousel__arrow_right")
      .item(0);
    rightButton.addEventListener("click", () => {
      const slide = this.container.getElementsByClassName("carousel__slide").item(0);
      const inner = this.container.getElementsByClassName("carousel__inner").item(0);
      const x = inner.getBoundingClientRect().left;
      const parentx = inner.parentElement.getBoundingClientRect().left;
      const Width = slide.offsetWidth;
      inner.style.transform = `translateX(${x - parentx - Width}px)`;
      leftButton.style.display = "";
      const nslides = inner.getElementsByClassName("carousel__slide").length;
      if (Math.abs(x) > (nslides - 3) * Width) {
        rightButton.style.display = "none";
      }
    });
    const leftButton = this.container
      .getElementsByClassName("carousel__arrow_left")
      .item(0);
    leftButton.addEventListener("click", () => {
      const slide = this.container.getElementsByClassName("carousel__slide").item(0);
      const inner = this.container.getElementsByClassName("carousel__inner").item(0);
      const x = inner.getBoundingClientRect().left;
      const Width = slide.offsetWidth;
      const parentx = inner.parentElement.getBoundingClientRect().left;
      inner.style.transform = `translateX(${x + Width - parentx}px)`;
      rightButton.style.display = "";
      const nslides = inner.getElementsByClassName("carousel__slide").length;
      if (Math.abs(x) < (3 * Width) / 2) {
        leftButton.style.display = "none";
      }
    });
    leftButton.style.display = "none";
  }

  buttonPlus() {
    const plusButtons = this.container.getElementsByClassName("carousel__button");
    for ( let i = 0; i < plusButtons.length; i++) {
       plusButtons.item(i).addEventListener("click", (event) => {
        event.currentTarget.dispatchEvent(new CustomEvent("product-add", {
          detail: event.currentTarget.dataset.id,
          bubbles: true,
        }));
      });
    }
  }
  get elem() {
    return this._container;
}
}
