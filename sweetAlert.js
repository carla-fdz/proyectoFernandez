(async() => {
    const {value: nombre} = await Swal.fire({
        title: '¡Bienvenido al Quiz de Economía!',
        text: '¿Cual es tu nombre?',
        confirmButtonText: 'Ok',
        footer: '<span>Esta es información importante</span>',
        width: '50%',
        padding: '1rem',
        backdrop: 'true',
        position: 'center',
        allowOutsideClick: 'true',
        allowEscapeKey: 'true',
        allowEnterKey: 'true',
        stopKeydownPropagation: 'true',
        input: 'text',
        inputPlaceholder: 'Nombre',
        // inputOptions: {
        //     Principiante: 'Principiante',
        //     Intermedio: 'Intermedio',
        //     Avanzado: 'Avanzado',},
        showConfirmButton: 'true',
        confirmButtonColor: 'orange',
        confirmButtonAriaLabel: 'Confirmar',
        showCancelButton: 'true',
        cancelButtonText: 'Cancelar',
        // cancelButtonColor:
        cancelButtonAriaLabel: 'Cancelar',
        buttonsStyling: 'true',
        showCloseButton: 'false',
        // closeButtonAriaLabel:'',
    });
    if (nombre){
        swal.fire({
            title: nombre + ", ¿Cuánto sabes sobre economía?",
            icon: 'success',
            confirmButtonColor: 'orange',
            confirmButtonText: '¡Vamos!',
        })
    }
})()

sessionStorage.setItem('inicio', 'Juego iniciado');
let comienzo = sessionStorage.getItem('inicio');