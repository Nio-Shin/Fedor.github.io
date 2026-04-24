const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const myModal = document.getElementById('myModal');

openBtn.addEventListener('click', function(e){
    e.preventDefault();
    myModal.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    myModal.classList.remove('active');
})