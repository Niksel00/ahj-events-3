import Galery from '../Galery';

test('add image', () => {
  const html = document.createElement('div');

  const galery = new Galery(html);
  const img = document.createElement('img');
  galery.add(img);
  expect(html.querySelectorAll('.image').length).toBe(1);
});

test('delete image', () => {
  const html = document.createElement('div');

  const galery = new Galery(html);
  const img = document.createElement('img');
  galery.add(img);
  const eventMock = { target: html.querySelector('.close') };
  galery.delete(eventMock);
  expect(html.querySelectorAll('.image').length).toBe(0);
});
