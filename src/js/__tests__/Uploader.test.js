import Uploader from '../Uploader';

test('showError', () => {
  const html = document.createElement('div');

  html.innerHTML = `<section class="uploader">
    <form class="upload_form">
      <label>Название: <input type="text" class="form_name"></label>
      <label>Ссылка на изображение: <input type="text" class="form_url"></label>
      <button>Добавить</button>
    </form>
    <div class="galery">
    </div>
  </section>`;
  const uploader = new Uploader(html.querySelector('.uploader'));
  uploader.showError('error');
  expect(html.querySelector('.upload_form .error').innerText).toBe('error');
});
