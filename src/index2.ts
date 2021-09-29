import { leerTeclado } from './util/entradaTeclado'

let sumar = async () => {

    let num1: number, num2: number, resultado: number

    num1 = parseInt(await leerTeclado("Numero 1"))
    num2 = parseInt(await leerTeclado("Numero 2"))
    resultado = num1 + num2
    console.log(`El resultado es: ${resultado}`)
}

let main = async () => {

    let opcion

    do {
        console.log("1 Sumar             \n2 Restar")
        console.log("3 Multiplicacion    \n4 Division")
        console.log("5 Modulo            \n6 Salir")

        opcion = parseInt(await leerTeclado('Elija una opcion'))
        switch (opcion) {
            case 1:
                await sumar()
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