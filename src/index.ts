import { leerTeclado } from './util/entradaTeclado'

let main = async () => {
    const valor = await leerTeclado("¿Qué quieres hacer?\n 1. Sumar\n 2. Restar\n 3. Multiplicar\n 4. Dividir\n")
    const num1 = await leerTeclado("Numero 1")
    const num2 = await leerTeclado("Numero 2")
    let nume1: number = parseInt(num1)
    let nume2: number = parseInt(num2)
    let opt: number = parseInt(valor)
    switch (opt) {
        case 1:
            let suma: number = nume1 + nume2
            console.log(`La solución es: ${suma}`)
            break;
        case 2:
            let resta: number = nume1 - nume2
            console.log(`La solución es: ${resta}`)

          break;
  
        case 3:
            let multi: number = nume1 * nume2
            console.log(`La solución es: ${multi}`)

          break;
        
        case 4:
            let div: number = nume1 / nume2
            console.log(`La solución es: ${div}`)
          break;
        default: 
        console.log("Por favor elija una opción")

      }

    }


main();