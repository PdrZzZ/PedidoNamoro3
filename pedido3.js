
function exibirAlerta() {
    alert("You agreed to date me! Good choice")
    window.open("https://www.youtube.com/watch?v=EhlhRIJygPM&pp=ygUWbm9jYXV0ZSBqb3JnZSBlIG1hdGV1cw%3D%3D", "_blank");
}
function mudarPosicao(){
    var botaoProibido = document.getElementById('botao2')
    botaoProibido.style.position = 'absolute';
    botaoProibido.style.left = Math.random() * (window.innerWidth - botaoProibido.clientWidth) + 'px';
    botaoProibido.style.top = Math.random() * (window.innerHeight - botaoProibido.clientHeight) + 'px'; 


}
