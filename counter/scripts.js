let button = document.getElementById('button');
let inc = document.getElementById('inc');
let dec = document.getElementById('dec');
let c = 0;
count.innerText = c;

inc.addEventListener('click', () => {
    c++;
    count.innerText = c;
});

dec.addEventListener('click', () => {
    c--;
    count.innerText = c;
});