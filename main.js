let indexPregunta = 0;
let puntaje = 0;

//Cargar preguntas
function cargarPregunta(index){
    objetoPregunta = baseDePreguntas[index];
    opciones = [...objetoPregunta.distractores];
    opciones.push(objetoPregunta.respuesta);
    for (let i=0; i<4; i++){
        opciones.sort(()=> Math.random()-0.5);
    }
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
    if (objetoPregunta.imagen){
        document.getElementById("imagen").src = objetoPregunta.imagen;
        document.getElementById("imagen").style.display = "";
    }
    document.getElementById("opcion1").innerHTML = opciones[0]; 
    document.getElementById("opcion2").innerHTML = opciones[1];
    document.getElementById("opcion3").innerHTML = opciones[2];
    document.getElementById("opcion4").innerHTML = opciones[3];
}
cargarPregunta(indexPregunta);

//Opciones
async function seleccionarOpcion(index){
    let validezRespuesta = opciones [index] ==objetoPregunta.respuesta;
    if(validezRespuesta){
        await Swal.fire({
            title: "¡Muy bien!",
            text: "La respuesta ha sido correcta",
            icon: "success",
            confirmButtonColor: 'orange',
        });
        puntaje++;
    }else{
        await Swal.fire({
            title: "Respuesta incorrecta",
            text: `La respuesta correcta es: "${objetoPregunta.respuesta}"`, 
            icon: "error",
            confirmButtonColor: 'orange',
        })
    }
    indexPregunta++;
    if (indexPregunta >= baseDePreguntas.length){
        await Swal.fire({
            title: "Juego terminado",
            confirmButtonColor: 'orange',
            text: `Tu puntaje fue de: ${puntaje}/${baseDePreguntas.length}`,
        });
        indexPregunta=0;
        puntaje = 0;
    }
    cargarPregunta(indexPregunta);
} 

// Eventos: #Bombilla
const bombilla = document.querySelector('#bombilla');
bombilla.addEventListener("mouseout", encender);
bombilla.addEventListener("mouseover", apagar);
function encender(){
    bombilla.setAttribute('src', "./assets/bombillaApagada.jpg");
}
function apagar(){
    bombilla.setAttribute('src', "./assets/bombillaEncendida.jpg")
}
function pista(){
    Swal.fire({
        title: 'Pista',
        text: objetoPregunta.pista,
        imageUrl: objetoPregunta.pistaImg,
        confirmButtonText: 'Entendido',
        confirmButtonColor: 'orange',
    });
};

const obtenerDatosJson = ()=>{
    fetch("data/data.json")
    .then((respuesta)=>{
        console.log(respuesta)
        return respuesta.json()
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log("Error: ", err)
    })
}

const btnJson = document.querySelector('#btnJson');
btnJson.addEventListener('click', obtenerDatosJson)


