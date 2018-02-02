function setRem() {
    document.documentElement.style.fontSize = 100/750 * window.innerWidth + 'px';
}
setRem();
window.onload = setRem;
window.onresize = setRem;