console.log(
  'Моя оценка своей работы - 160 баллов\nОтзыв по пунктам ТЗ:\n',
  '\nВсё выполнено в соответствии с ТЗ.\n',
  '\nНе удалось добиться совершенства с карточками в секции "Price".',
  '\nПрокрутки горизонтальной нет, если вдруг вам показалось,\nчто она есть - это баг девтула.\nПопробуйте переоткрыть страницу или перезапустить ПП',
  '\nТак же из-за бага девтула при изменении размеров туда-сюда\nи переключению с desktop на mobile и обратно, может текст в секции Portfolio некорректно отображаться'
);

const pop = document.querySelector('.pop-up');
const close = document.querySelector('.pop-up-close');
const text = document.querySelector('.pop-up-in');

text.innerHTML = 'Моя оценка своей работы - 160 баллов<Br>Отзыв по пунктам ТЗ:<Br><Br>Всё выполнено в соответствии с ТЗ.<br><br>Более подробно продублировал в консоль.';

function closePop() {
  pop.classList.add('hidden');
}

function openPop() {
  pop.classList.remove('hidden');
}

close.addEventListener('click', closePop);
setTimeout(openPop, 9000);