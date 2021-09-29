import { leerTeclado } from './util/entradaTeclado'

let main = async () => {

    let opcion

    do {
        console.log("1 Sumar             2 Restar")
        console.log("3 Multiplicacion    4 Division")
        console.log("5 Modulo            6 Salir")
        opcion =
            parseInt(await leerTeclado('Elija una opcion'))
        switch (opcion) {
            case 1:
                console.log("Primera opcion")
                break
            case 2:
                console.log("Segunda opción")
                break
            case 3:
                console.log("adios")
                break
        }

    } while (opcion != 0)
}
main();