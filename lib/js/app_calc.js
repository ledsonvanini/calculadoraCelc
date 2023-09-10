'use strict';
/**
 * App Calculadora de Média Ponderada
 * Colégio Leôncio Correia 2023
 * Desenvolvido por Ledson Vanini
 */

let nt1 = document.querySelector("#media-1")
let nt2 = document.querySelector("#media-2")
let nt3 = document.querySelector("#media-3")

let notaMaxima = parseFloat('10.0')      
let notaMinima = parseFloat('0.0')

let n1 = parseFloat(nt1.value).toFixed(1)
let n2 = parseFloat(nt2.value).toFixed(1) 
let n3 = parseFloat(nt3.value).toFixed(1)

// nt1 = parseFloat(nt1.value = notaMinima)
// nt2 = parseFloat(nt2.value = notaMinima)
// nt3 = parseFloat(nt3.value = notaMinima)


let danger = document.querySelector(".danger")
let notaAnual = document.querySelector(".media-anual-ponderada")
let notaMinimaTrimestre = document.querySelector(".media-necessaria-tri")
let medias = document.querySelector(".medias")


let btnCalcular = document.querySelector("#btnCalcular")
let btnLimpar = document.querySelector("#btnLimpar")
let inputFields = document.querySelectorAll("input[name='input-nota']")

console.log(inputFields.value + " adf")
// inputFields.addEventListener('focus', e => {
//     e.preventDefault()
//         if (nt1 < 0 || nt2 < 0 || nt3 < 0){ 
           
//             nt1.innerHTML = notaMinima
//             nt2.innerHTML = notaMinima
//             nt3.innerHTML = notaMinima
            
           
//         }  
    
    
// })
// alert(inputFields)

//  for (let i = 0 ; i < inputFields.length; i++){
//     inputFields[i].addEventListener('keypress' , (e) => {
//         const keyCode = (e.keyCode ? e.keyCode : e.which)
//                 // 47 ao 58 são números
//                 if(keyCode < 48 || keyCode > 58 ) {                   
//                     e.preventDefault()               
//                 }                
//     } ) ;
// }
// if (updatedValue > 10){
//     updatedValue = (updatedValue / 10)
// }
function validDigits(digit){
    const validated = digit.replace(/[^0-9,]/g, "");
    // console.log(validated + " this... " + digit)
    return validated
}
// console.log(validDigits("3"))

for (let i = 0; i < inputFields.length; i++){
    inputFields[i].addEventListener('input', e => {
        const uValue = e.target.value
        let uv = validDigits(uValue) 
        let updatedValue = parseFloat(uv).toFixed(1)
        
        updatedValue = updatedValue
        console.log(updatedValue)
          
    })
}
btnCalcular.addEventListener('click', e => {  
    e.preventDefault()
  
    n1, n2, n3 = 0.0 
    // for (let i = 0 ; i < inputFields.length; i++){
    //     // inputFields[i].addEventListener('blur' , (e) => {
    //     //     e.preventDefault()
        
    // // }) 
    if (n1 =="" || n2 =="" || n3 == "" ){
        
        notaAnual.innerHTML = notaMinima
        notaMinimaTrimestre.innerHTML = notaMinima
        medias.style.display = "block"
        displayTextError()
        alert(n1, n2, n3)  
    }
    // else if (nt1 > 10 || nt2 > 10 || nt3 > 10) {
    //     nt1 = notaMaxima
    //     nt2 = notaMaxima
    //     nt3 = notaMaxima  

    // }
    
    else {        
        let mediaPonderadaAnual = ((n1*2)+(n2*3)+(n3*5)) / 10
        let notaMinima = ((6-((n1*0.2)+(n2*0.3)))/0.5)        
    
        notaAnual.innerHTML = mediaPonderadaAnual.toFixed(1)
        notaMinimaTrimestre.innerHTML = notaMinima.toFixed(1)        
        console.log("Here" + Math.round((n1 + n2 + n3) / 3))
        alert("Media: "+mediaPonderadaAnual)
   
   }
   
    
    
})

// btnLimpar.addEventListener('click', e => {    
//     clearInputs()
// })
   
/*

    if (nt1 <= 0 && nt2 <= 0 && nt3 <= 0){       
        notaAnual.innerHTML = notaMinima
        notaMinimaTrimestre.innerHTML = notaMinima
        medias.style.display = "block"
        displayTextError()            
   
}       
     else if (nt1 > 10 || nt2 > 10 || nt3 > 10) {
        nt1 = notaMaxima
        nt2 = notaMaxima
        nt3 = notaMaxima  

    }
    
    else {
        // const n1 = parseFloat(nt1)
        // const n2 = parseFloat(nt2)
        // const n3 = parseFloat(nt3)
        
        let mediaPonderadaAnual = ((nt1*2)+(nt2*3)+(nt3*5)) / 10
        let notaMinima = ((6-((nt1*0.2)+(nt2*0.3)))/0.5)
        
       //  alert(nt1)
       notaAnual.innerHTML = mediaPonderadaAnual.toFixed(1)
       notaMinimaTrimestre.innerHTML = notaMinima.toFixed(1)        
   
   }
   
   })
*/
   function clearInputs() {
        nt1.innerHTML = notaMinima
        nt2.innerHTML = notaMinima
        nt3.innerHTML = notaMinima
        document.querySelector("#media-1").focus() 
   }

   function displayTextError() {
    let errorTextInterval = setInterval(()=>{           
        danger.innerHTML = "Por favor, preencha os campos acima!*"
        danger.classList.add('text-danger')
        // danger.classList.add('.text-danger')
    },300)
    setTimeout(()=>{
        clearInterval(errorTextInterval)
        danger.classList.remove('text-danger')
        danger.innerHTML = ""
        medias.style.display = "none"
    },3500)

}
