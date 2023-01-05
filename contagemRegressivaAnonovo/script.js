const anoNovo = "01/01/2023";

const diaA = document.querySelector('.day');
const horaA = document.querySelector('.hour');
const minutoA = document.querySelector('.minute');
const segundoA = document.querySelector('.second');

function contagemRegressiva(){
    const horaAtual = new Date();
    const novaDataAno = new Date(anoNovo);
    const SegundosTotais = (novaDataAno - horaAtual) / 1000;
    
    const dia = Math.floor(SegundosTotais / 3600 / 24);
    const hora = Math.floor(SegundosTotais / 3600) % 24;
    const minuto = Math.floor(SegundosTotais / 60) % 60;
    const segundo = Math.floor(SegundosTotais) % 60;

    diaA.innerHTML = formatoTempo(dia);
    horaA.innerHTML = formatoTempo(hora);
    minutoA.innerHTML = formatoTempo(minuto);
    segundoA.innerHTML = formatoTempo(segundo);
}
function formatoTempo(tempo){
    return tempo > 10 ? tempo  : `0${tempo}`; 
}

contagemRegressiva()
setInterval(contagemRegressiva, 1000);