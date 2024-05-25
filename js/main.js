document.addEventListener('DOMContentLoaded', function() {
    var pantalla = document.querySelector('.pantalla');
    var botones = document.querySelectorAll('.btn');

    botones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var valor = this.textContent;

            switch(valor) {
                case '=':
                    var resultado = eval(pantalla.textContent);

                    pantalla.textContent = resultado;

                    localStorage.setItem('lastOperation', pantalla.textContent);
                    break;
                case 'C':
    
                    pantalla.textContent = '0';
                    localStorage.removeItem('lastOperation');
                    break;
                case '←':
                    
                    pantalla.textContent = pantalla.textContent.slice(0, -1);
                    break;
                default:
                    
                    if (pantalla.textContent === '0') {
                        pantalla.textContent = valor;
                    } else {
                        pantalla.textContent += valor;
                    }
                    break;
            }
        });
    });

    var ultimaOperacion = localStorage.getItem('lastOperation');
    if (ultimaOperacion) {
        pantalla.textContent = ultimaOperacion;
    }
});


    
    