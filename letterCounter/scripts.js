let input = document.getElementById('inp');
let count = document.getElementById('count');

input.addEventListener('keyup', () => {
    let textCount = input.value.match(/\S/g).length;
    count.innerText = `The phrase "${input.value}" has >> ${textCount} << letters`;
});

/*const initRestart = () => {
    let restart = input.value.length;
    if (restart == 1) {
        restart == 'The phrase "" has >> 0 << letters';
    }
    return restart;
};
*/