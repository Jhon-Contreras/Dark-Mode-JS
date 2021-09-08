
// Funciones para cambiar texto 
const cambiarTextoL = () => {
    document.getElementById('switchTxt').innerHTML = 'LIGHT';
}
const cambiarTextoD = () => {
    document.getElementById('switchTxt').innerHTML = 'DARK';
}

const btnSwitch = document.querySelector('#switch');


btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    cambiarTextoD();
    // guardamos el modo en localStorage 
    if ( document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true')
        cambiarTextoD();
    } else{
        localStorage.setItem('dark-mode', 'false');
        cambiarTextoL();
    }
});

//Obtenemos el modo actual en el que se encuentra el usuario
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.toggle('dark');
    btnSwitch.classList.add('active');
    cambiarTextoD();
} else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
    cambiarTextoL();
}




