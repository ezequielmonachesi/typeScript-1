// Cuando se crea un objeto las key reciben un tipo de dato segun le escriba.
// const persona = {
//     name: 'Pepe',
//     age: 30
// }

// Cuando inicializo una variable el autocompletado de acciones es sobre ese tipo de datos.
// let texto = 123;
// texto.

// cualquier tipo de dato ANY
// Ignore el tipado de typescript
// let anyValue: any = 'hola'
// anyValue.
// evitar any

// inferencia
// como a y b infiere que son number sin decirla nada a
// const a = 1;
// const b = 2;
// const c = a + b;
// c también será number

// const saludar = (name: string) =>{
//     console.log(`Hola ${name}`)
// }

// saludar('Pepe')
// saludar(2)

// Objetos en funcion con tipo de datos
// const saludar = ({ name, age }: { name: string; age: number }) => {
//   console.log(`hola ${name}, tienes ${age} años.`);
// };

// saludar({ name: 'Pepe', age: 5 });

//
// const saludar = ({ name, age }: { name: string; age: number }) => {
//   console.log(`hola ${name}, tienes ${age} años.`)
//   return age
// }

// let userName: string
// userName = saludar({name: 'Pepe', age: 2})


// cuando una funcion no tiene return se le indica un void
// const sayHiFromFunction = (fn: (name: string) => void) => {
//     fn('Miguel');
// }

// sayHiFromFunction((name: string)=>{
//     console.log(`Hola ${name}`)
// })

// tipar arrow function
const sumar = (a: number, b:number): number =>{
    return a + b
}

const restar: (a:number, b:number) => number = (a,b) =>{
    return a -b
}




// https://www.youtube.com/watch?v=fUgxxhI_bvc 43:43
