var mouth = document.getElementById('action');

mouth.addEventListener('click', function(change){
    change.target.classList.toggle('speak');
});