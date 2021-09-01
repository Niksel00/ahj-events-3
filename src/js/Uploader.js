import Galery from './Galery';

export default class Uploader {
  constructor(element) {
    this.form = element.querySelector('.upload_form');
    this.fileName = element.querySelector('input.form_name');
    this.fileURL = element.querySelector('input.form_url');
    this.galery = new Galery(element.querySelector('.galery'));
  }

  init() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (this.fileURL.value !== '') {
        this.loadImage();
      } else {
        this.showError('Input image URL');
      }
    });

    this.galery.init();
  }

  loadImage() {
    const image = document.createElement('img');
    image.src = this.fileURL.value;
    image.title = this.fileName.value;
    image.addEventListener('load', () => {
      this.galery.add(image);
      this.fileName.value = '';
      this.fileURL.value = '';
    });
    image.addEventListener('error', () => {
      this.showError('Image URL is INCORRECT!');
    });
  }

  showError(message) {
    const error = document.createElement('div');
    error.classList.add('error');
    error.innerText = message;
    if (!this.form.querySelector('.error')) {
      this.fileURL.closest('label').after(error);
      setTimeout(() => error.remove(), 2000);
    }
  }
}
