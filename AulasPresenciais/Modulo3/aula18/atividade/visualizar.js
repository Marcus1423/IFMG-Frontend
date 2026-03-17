import { cachorros } from "./scrpits";

let visualizarCachorro = document.getElementById('visualizarCachorro');
    
    visualizarCachorro.addEventListener('click', function () {
        for(let i = 0; i < cachorros.length; i++) {
            console.log(i);
        }
    })