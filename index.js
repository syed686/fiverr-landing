const loginBtn = document.getElementById('loginBtn');
const portal = document.getElementById('portal');
const closeBtn = document.getElementById('closeBtn');

loginBtn.addEventListener('click', () => {
  portal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  portal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === portal) {
    portal.style.display = 'none';
  }
});
