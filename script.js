const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener('click', () => {
  window.location.href = "yes.html";
});
