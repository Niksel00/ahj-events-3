/* eslint class-methods-use-this: ["error", { "exceptMethods": ["delete"] }] */
export default class Galery {
  constructor(element) {
    this.galery = element;
    this.delete = this.delete.bind(this);
  }

  init() {
    this.galery.addEventListener('click', this.delete);
  }

  add(image) {
    const imageElement = document.createElement('div');
    imageElement.classList.add('image');
    const closeElement = document.createElement('div');
    closeElement.classList.add('close');
    imageElement.appendChild(closeElement);
    imageElement.appendChild(image);
    this.galery.appendChild(imageElement);
  }

  delete(event) {
    if (event.target.classList.contains('close')) {
      event.target.closest('div.image').remove();
    }
  }
}
