const openBtn3 = document.getElementById('openBtn3');
const closeBtn3 = document.getElementById('closeBtn3');
const general2 = document.getElementById('general2');

openBtn3.addEventListener('click', function(e){
    e.preventDefault();
    general2.classList.add('active');
})

closeBtn3.addEventListener('click', () => {
    general2.classList.remove('active');
})