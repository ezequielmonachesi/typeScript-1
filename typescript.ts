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
const a = 1;
const b = 2;
const c = a + b;
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
