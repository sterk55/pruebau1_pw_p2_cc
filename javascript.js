function opcionCorrecta() {

    var valorDisplayNegro = document.getElementById('idPokemonNegro').style.display;
    var valorDisplayResultado = document.getElementById('idResultado').style.display;
    var valorDisplayColor = document.getElementById('idPokemonColor').style.display;
    var textoCorrecta = document.getElementById('idResultado').innerHTML;
    var colorTextoInicial = document.getElementById('idTextoInicial').style.color;

    if (valorDisplayNegro == 'block' || valorDisplayNegro == 'none') {
        valorDisplayNegro = 'none';
        valorDisplayColor = 'block';
        valorDisplayResultado = 'block';
        colorTextoInicial = 'yellow';

        textoCorrecta = 'Felicitaciones, has seleccionado la opción correcta';
    }

   
    document.getElementById('idPokemonNegro').style.display = valorDisplayNegro;
    document.getElementById('idResultado').style.display = valorDisplayResultado;
    document.getElementById('idPokemonColor').style.display = valorDisplayColor;
    document.getElementById('idTextoInicial').style.color = colorTextoInicial;
    document.getElementById('idResultado').innerHTML = textoCorrecta;


}
function opcionIncorrecta() {
    var valorDisplayNegro = document.getElementById('idPokemonNegro').style.display;
    var valorDisplayColor = document.getElementById('idPokemonColor').style.display;
    var valorDisplayResultado = document.getElementById('idResultado').style.display;
    var textoCorrecta = document.getElementById('idResultado').innerHTML;
    var colorTextoInicial = document.getElementById('idTextoInicial').style.color;

    if (valorDisplayNegro == 'block' || valorDisplayNegro == 'none') {
        valorDisplayNegro = 'none';
        valorDisplayColor = 'block';
        valorDisplayResultado = 'block';
        colorTextoInicial = 'red';

        textoCorrecta = 'Pokémon incorrecto, la respuesta es: excadrill';


    }
    document.getElementById('idPokemonNegro').style.display = valorDisplayNegro;
    document.getElementById('idPokemonColor').style.display = valorDisplayColor;
    document.getElementById('idResultado').style.display = valorDisplayResultado;
    document.getElementById('idTextoInicial').style.color = colorTextoInicial;
    document.getElementById('idResultado').innerHTML = textoCorrecta;




}

function Reinicio(){
    var valorDisplayNegro = document.getElementById('idPokemonNegro').style.display;
    var valorDisplayColor = document.getElementById('idPokemonColor').style.display;
    var valorDisplayResultado = document.getElementById('idResultado').style.display;
    var colorTextoInicial = document.getElementById('idTextoInicial').style.color;

    if (valorDisplayNegro == 'block' || valorDisplayNegro == 'none') {
        valorDisplayNegro = 'block';
        valorDisplayColor = 'none';
        valorDisplayResultado = 'none';
        colorTextoInicial = 'black';



    }
    document.getElementById('idPokemonNegro').style.display = valorDisplayNegro;
    document.getElementById('idPokemonColor').style.display = valorDisplayColor;
    document.getElementById('idResultado').style.display = valorDisplayResultado;
    document.getElementById('idTextoInicial').style.color = colorTextoInicial;
}