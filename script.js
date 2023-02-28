const btn_N = document.querySelector(".buttonN")
const larguraBotao = btn_N.offsetWidth;
const alturaBotao = btn_N.offsetHeight;

const clickN = btn_N.addEventListener("click", () => {
    const positionTop = Math.floor(Math.random() * (window.innerHeight - alturaBotao))
    const positionLeft = Math.floor(Math.random() * (window.innerWidth - larguraBotao))
    
    btn_N.style.top = `${positionTop}px`
    btn_N.style.left = `${positionLeft}px`
})


