let input = document.getElementById('inp');

input.addEventListener('keyup', () => {
    document.getElementById("count").innerHTML = "Count :" + " " + input.value.length;
});