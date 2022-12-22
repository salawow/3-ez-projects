const myColorList = ["#ee4540","#c72c41","#801336","#510a32","#2d142c", "black"];

const changeBackground = () => {
    const colorChange = [Math.floor(Math.random()*myColorList.length)];
    document.body.style.backgroundColor= myColorList[colorChange];
};
