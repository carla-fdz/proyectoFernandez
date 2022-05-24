// Saludo Inicial
//Modificar con Sweet Alert, asyn y await

/* function saludar(){
    alert("Hola! ¿Qué te parece si ponemos a prueba tu conocimiento?")
}
saludar()
sessionStorage.setItem("nombre", prompt('Ingresa tu nombre: '));
let usuario = sessionStorage.getItem('nombre');
console.log(usuario);
sessionStorage.setItem("dificultad", prompt('Elige la dificultad (1-3): '));
let dificultad = sessionStorage.getItem('dificultad');
console.log(dificultad);
switch(dificultad){
    case "1":
        confirm("Nivel principiante")
        break;
    case "2":
        confirm("Nivel intermedio")
        break;
    case "3":
        confirm("Nivel avanzado")
        break;
}
if (usuario == null){
    sessionStorage.setItem('nombre');
}else{
    alert(usuario + ', comencemos!')
}*/ 
let indexPregunta = 0;

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
        })
        // event.target.style.backgroundColor= 'green'; 
    }else{
        await Swal.fire({
            title: "Respuesta incorrecta",
            //el $ no funciona:
            // text: 'La respuesta correcta es ${objetoPregunta.respuesta}', 
            icon: "error",
            confirmButtonColor: 'orange',
        })
        // event.target.style.backgroundColor= 'red'
    }
    indexPregunta++;
    if (indexPregunta >= baseDePreguntas.length){
        await Swal.fire({
            title: "Juego terminado",
            confirmButtonColor: 'orange',
        });
        indexPregunta=0;
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

// Se me genera un problema cuando hago click en pista
function pista(){
    ayuda = document.getElementById("pista").innerHTML = objetoPregunta.pista;
    if(ayuda){
        Swal.fire({
            title: 'Pista',
            texto: objetoPregunta.pista,
            imageUrl: objetoPregunta.pistaImg,
            confirmButtonText: 'Entendido',
            confirmButtonColor: 'orange',
        });
    }
}

