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

// const row = document.querySelector('.row');
// let circle = ''


// // ciclo for
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//        circle += "<div class='circle bg-fizz-buzz'>FizzBuzz</div>"
//     } else if (i % 3 === 0) {
//         circle += "<div class='circle bg-fizz'>Fizz</div>"
//     } else if (i % 5 === 0) {
//         circle += "<div class='circle bg-buzz'>Buzz</div>"
//     }  else {
//         circle += `<div class='circle'>${i}</div>` 
        
//     }
 
// }

// row.innerHTML = circle



// row.innerHTML = circle

// METODO manipolazione del DOM

const row = document.querySelector('.row');
// ciclo for

for (let i = 1; i <= 100; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const text = document.createElement('p')
    

    if (i % 3 === 0 && i % 5 === 0) {
       text.append('FizzBuzz') 
       circle.classList.add('bg-fizz-buzz')
    } else if (i % 3 === 0) {
        text.append('Fizz') 
        circle.classList.add('bg-fizz')
    } else if (i % 5 === 0) {
        text.append('Buzz') 
        circle.classList.add('bg-buzz')
    }  else {
        text.append(i)
    }

    circle.appendChild(text)
    row.appendChild(circle);
    
}

