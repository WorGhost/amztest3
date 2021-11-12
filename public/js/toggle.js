const btnToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

btnToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open')
})