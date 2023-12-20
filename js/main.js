console.log('JS OK');

// // Solo stampare in console
// // ciclo for
// for (let i = 1; i <= 100; i++) {
    
//     if (i % 3 === 0 && i % 5 === 0) {
//         // console.log(`${i} è divisibile per 3 e per 5`)
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         // console.log(`${i} è divisibile per 3`)
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         // console.log(`${i} è divisibile per 5`)
//         console.log("Buzz")
//     }  else {
//         console.log(i);
//     }
 
// }

//Stampare i risultati nella pagina 

// METODO template literals

const row = document.querySelector('.row');



// ciclo for
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         let square = '<div class="square>FizzBuzz</div>'
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         square = '<div class="square>Fizz</div>'
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         square = '<div class="square>Buzz</div>'
//         console.log("Buzz")
//     }  else {
//         square = `<div class="square">${i}</div>`;
//     }
 
// }



// row.innerHTML = square

// METODO manipolazione del DOM

// ciclo for

for (let i = 1; i <= 100; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    const text = document.createElement('p')
    

    if (i % 3 === 0 && i % 5 === 0) {
       text.append('FizzBuzz') 
       square.classList.add('bg-fizz-buzz')
    } else if (i % 3 === 0) {
        text.append('Fizz') 
        square.classList.add('bg-fizz')
    } else if (i % 5 === 0) {
        text.append('Buzz') 
        square.classList.add('bg-buzz')
    }  else {
        text.append(i)
    }

    square.appendChild(text)
    row.appendChild(square);
 
}