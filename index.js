// let saltador = document.getElementById("aviso");

let palabrasDelJuego=["G I  T ","allow","harrypotter"]

var rodrigo = "  R O D RIGO";
rodrigo = rodrigo.trim();
console.log(rodrigo)

var orig = '   foo  ';
console.log(orig.trim()); 


function comprobar(inputPalabra){
    let  palabraLimpia = [];
    
    inputPalabra.forEach(element => {
        palabraLimpia.push(element.toLowerCase())
        palabraLimpia.push(element.trim())
    });
    
    console.log(palabraLimpia)
}
comprobar(palabrasDelJuego)

// function avisador(){
//     prompt("esto anda?")
// }

// saltador.onclick = avisador;


