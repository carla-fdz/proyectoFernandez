let baseDePreguntas= [{
    pregunta: "¿Qué es un impuesto indirecto?",
    imagen: "./assets/impuestosInd.jpg",
    pista: "Impuesto al valor agregado (IVA) del 21%",
    respuesta: "Es un impuesto que afecta a todos los ciudadanos por igual cuando eligen consumir algo",
    distractores:["Es un impuesto al ingreso o renta de las personas", "Es el que recae sobre una persona en específico", "Es un impuesto que decrece a medida que el ingreso aumenta"]
},{
    pregunta: "Si el Banco Central disminuye sus reservas de divisas debido a un déficit de balanza de pagos, finalmente se producirá:",
    imagen: "./assets/bancoCentral.jpg",
    pista: "Existe menos dinero en las reservas y no se está produciendo variación del multiplicador",
    respuesta: "Una disminución de la oferta monetaria",
    distractores: ["Un aumento de la base monetaria", "Un aumento de la oferta monetaria", "Una disminución del multiplicador monetario"]
},{
    pregunta: "Si el Banco Central quiere aumentar la Base Monetaria puede:",
    imagen: "./assets/dolares.jpg",
    pista: "Implica un aumento de la oferta monetaria por lo que el tipo de interés bajará",
    respuesta: "Comprar bonos o comprar dólares",
    distractores: ["Vender bonos o vender dólares","Vender bonos o comprar dólares","Comprar bonos o vender dólares"]
},{
    pregunta: "El multiplicador monetario puede aumentar:",
    imagen: "./assets/multiplicador.jpg",
    pista: "Requiere que el banco posea más dinero por lo que es necesario incentivar el préstamo",
    respuesta: "Al disminuir el tipo de interés al que presta el Banco Central a los bancos comerciales",
    distractores: ["Al aumentar el coeficiente legal de caja","Al disminuir el uso de tarjetas de crédito","Al disminuir el tipo de interés de mercado"]
},{
    pregunta: "Indique cual de las siguientes respuestas es correcta. El  multiplicador monetario será:",
    imagen: "./assets/multiplicador.jpg",
    pista: "Existe una relación inversa entre el coeficiente y el multiplicador",
    respuesta: "Menor cuanto mayor es el coeficiente de reservas",
    distractores: ["Mayor cuanto mayor es el cociente entre el efectivo y los depósitos","Mayor cuanto mayor es el coeficiente de reservas","Ninguna de las anteriores"]
},{
    pregunta: "Un aumento del porcentaje de reservas que mantienen los bancos sobre sus depósitos:",
    imagen: "./assets/reservas.jpg",
    pista: "Aumenta el coeficiente: (w = E/D)",
    respuesta: "Disminuirá el multiplicador monetario y la oferta monetaria",
    distractores: ["Aumentará la base y la oferta monetaria","Aumentará el multiplicador monetario y la oferta monetaria","No variará la oferta monetaria, pues los depósitos de los bancos aumentarán en la misma cuantía que aumentaron las reservas"]
},{
    pregunta: "Un aumento del uso de tarjetas de crédito por parte del público:",
    imagen: "./assets/tarjetaCredito.jpg",
    pista: "Implica una disminución del cociente entre el dinero legal en manos del público y los depósitos a la vista en los bancos comerciales",
    respuesta: "Aumentará el multiplicador monetario y la oferta monetaria",
    distractores: ["Aumentará la base monetaria y la oferta monetaria","Disminuirá la base monetaria y la oferta monetaria","Disminuirá el multiplicador monetario y la oferta monetaria"]
},{
    pregunta: "Indique cual de las siguientes respuestas es correcta. Las tasas activas: ",
    imagen: "./assets/credito.jpg",
    pista: "El banco actúa como intermediario financiero otorgando créditos",
    respuesta: "Constituyen un activo ya que son las que cobran los bancos por los préstamos que otorga al público",
    distractores: ["Constituyen un activo ya que son las que cobran el público que pone sus ahorros en plazos fijos","Son las tasas que deben pagar los clientes por depositar su dinero en una entidad bancaria","Permiten obtener un interés que se ajusta segun la evolución de la inflación"]
},{
    pregunta: "La población económicamente inactiva: ",
    imagen: "./assets/indec.jpg",
    pista: "Población inactiva = Población total - Población económicamente activa",
    respuesta: "Considera a las personas que dependen económicamente de otras, incluyendo a menores de 10 años y a aquellos que no trabajaron ni buscaron trabajo en el período de referencia",
    distractores: ["Considera a menores de 10 años, a los desocupados y a los que trabajan sin remuneración","Son aquellos que no trabajaron ni buscaron trabajo en los últimos seis meses","Incluye a los que no tienen trabajo más aquellas personas que si tienen pero están suspendidas sin remuneración"]
},{
    pregunta: "Indique cual de los siguientes grupos se considera dentro de la población económicamente inactiva: ",
    imagen: "./assets/inactiva.jpg",
    pista: "",
    respuesta: "Estudiantes, pensionados, jubilados, incapacitados permanentemente, rentistas y personas dedicadas al cuidado del hogar",
    distractores: ["Jubilados, incapacitados permanentemente, no remunerados y suspendidos sin pago","Estudiantes, ayudantes familiares, desocupados y menores de 10 años","Rentistas, estudiantes, pensionados, ayudantes familiares y aquellos con trabajo pero con licencia"]
},{
    pregunta: "Indique cual de las siguientes afirmaciones es correcta. Los ocupados: ",
    imagen: "./assets/indec.jpg",
    pista: "Considera a todos aquellos que están en condiciones de poder trabajar y se encuentran disponibles",
    respuesta: "Son personas mayores de 10 años que trabajaron al menos una hora durante el período de referencia e incluyen a los remunerados y no remunerados",
    distractores: ["Son personas mayores de 16 años que trabajaron al menos cuatro horas en la semana e incluye a remunerados y no remunerados","Son parte de la población económicamente activa por lo que incluye solamente a los remunerados que tienen un trabajo formal","Son aquellos que poseen un trabajo de al menos ocho horas semanales sin considerar la edad"]
},{
    pregunta: "Juan tiene 16 años y cuida a sus abuelos 3 horas semanales. En la semana buscó trabajo de medio tiempo que no interfiera con el estudio. ¿Cuál es su condición de actividad?",
    imagen: "./assets/estudiante.jpg",
    pista: "Se utiliza la encuesta permanente de hogares para clasificar a cada persona en una categoría. Todas las personas caen en una sola categoría",
    respuesta: "Ocupado. Trabaja sin remuneración y se encuentra en búsqueda de otro trabajo.",
    distractores: ["Inactivo. Es estudiante y no recibe remuneración.","Desocupado. No tiene trabajo pero buscó durante el período de referencia.","No se considera ya que es menor de edad."]
},{
    pregunta: "¿En qué consiste la creación secundaria de dinero?:",
    imagen: "./assets/deposito.jpg",
    pista: "Es dinero creado por bancos comerciales",
    respuesta: "Las entidades bancarias conceden prestamos a partir de depósitos realizados por los clientes, expandiendo la oferta monetaria a través del multiplicador monetario",
    distractores: ["El Banco Central aumenta la oferta monetaria emitiendo nuevos billetes y monedas más los depositos de los bancos comerciales en el Banco Central","Se refiere al encanje bancario o reserva minima de efectivo que debe poseer la entidad bancaria","Son los préstamos que se solicitan a una entidad bancaria para poder solventar gastos con dinero que no se tiene todavía"]
},{
    pregunta: "Si el Banco Central desea mantener constante la oferta monetaria mientras el público está aumentando la relación efectivo-depósitos, el Banco Central deberá:",
    imagen: "./assets/efectivo.jpg",
    pista: "Las personas están prefiriendo quedarse con efectivo en mano y no en los bancos",
    respuesta: "Conceder más créditos a los bancos comerciales.",
    distractores: ["Vender fondos públicos en mercado abierto.","Aumentar el tipo de interés al que presta a los bancos comerciales.","Aumentar el coeficiente legal de caja."]
}]