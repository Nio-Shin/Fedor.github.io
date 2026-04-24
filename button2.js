const openBtn2 = document.getElementById('openBtn2');
const closeBtn2 = document.getElementById('closeBtn2');
const general = document.getElementById('general');

openBtn2.addEventListener('click', function(e){
    e.preventDefault();
    general.classList.add('active');
})

closeBtn2.addEventListener('click', () => {
    general.classList.remove('active');
})