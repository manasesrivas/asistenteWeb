const select = document.getElementById('grado')
    const asistente = new SpeechSynthesisUtterance()
    asistente.lang = 'es-ES'

    
    const secciones = {
        '3ACC': 'El orientador de 3ACC es ovidio martinez',
        '1GRL': 'El orientador de 1GRL es miss lupita',
        '2ACC': 'El orientador de 1ACC es ada vilafuerte',
        '1ACB': 'El orientador de 1ACB es jackeline garcia',
        '1ACA': 'El orientador de 1ACA es delia de la paz',
        '3DSA': 'El orientador de 3DSA es jonatan castillo',
        '2DSA': 'El orientador de 2DSA es alan fernan',
        '1DSA': 'El orientador de 1DSA es melvin mendez',
    }


    Object.keys(secciones).forEach(element => {
        let option = `<option value="${element}">${element}</option>`
        select.insertAdjacentHTML('beforeend', option)
    })

    document.querySelector('#button').addEventListener('click', () => {
        asistente.text = secciones[select.value]
        window.speechSynthesis.speak(asistente)
    })
    
