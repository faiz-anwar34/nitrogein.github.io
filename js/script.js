const notice = document.querySelector('.notice');
const noticeText = notice.querySelector('p');
const scrollDuration = 10000;

noticeText.style.position = 'relative';
noticeText.style.right = '-100%';

setTimeout(() => {
  noticeText.style.transition = `right ${scrollDuration}ms linear`;
  noticeText.style.right = '100%';
}, 100);
