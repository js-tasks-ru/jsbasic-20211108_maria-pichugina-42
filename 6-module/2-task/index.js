
import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this._container = createElement(`
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
          <span class="card__price">€${product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${product.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
          </div>
      </div>
    `);
    this._addToCard(product.id);
  }
  get elem() {
    return this._container;
  }
  _addToCard(id) {
    let productAdd = new CustomEvent("product-add", {
      detail: id,
      bubbles: true
    });
    this._container.querySelector('.card__button').addEventListener('click', event => {event.target.dispatchEvent(productAdd)});
  }
}