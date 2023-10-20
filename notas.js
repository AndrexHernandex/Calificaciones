
let calificaciones = [];

function capturarNotas() {
    calificaciones.length = 0; // Reiniciar el arreglo para evitar duplicaciones

    for (let i = 1; i <= 5; i++) {
        let notacap = parseFloat(prompt(`Ingresa la nota ${i}:`));
    }
    
    document.getElementById("notacap").textContent = notacap;
    notacap = calificaciones;
}

function listarNotas(resultado){
    let listnote = document.getElementById("listarNotas");
    for(let califica of calificaciones){
        let item = document.createElement("li");
        item.innerText = califica ;
         listnote.appendChild(item);
        }
    //  document.getElementById("").value = ;
}

function calcularPromedio(){
    let suma = 0;

    for (i=0;i< calificaciones.length;i++){
            suma = suma + calificaciones[i];
        }
        let promedio = (suma / calificaciones.length);
        document.getElementById("promedio").textContent = promedio;
}

function notaAlta(){
    let notaAlta = 0;
    let i = 0;
    while (i < calificaciones.length){
        if(calificaciones[i] > notaAlta){
            notaAlta = calificaciones[i];
        }
        i++;
    }
        let nota = document.getElementById("nota");
        nota.textContent = notaAlta;
}

function aplazo(){
    let aplazo = "No";
    let i = 0;

    do{
        if(calificaciones[i] < 3){
            aplazo = "si";
            break;
        }
        i++;
    }while(i < calificaciones.length)

    document.getElementById("aplazo").textContent = aplazo;
}

    
