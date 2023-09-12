'use strict';
/**
 * App Calculadora de Média Ponderada
 * Colégio Leôncio Correia 2023
 * Desenvolvido por Ledson Vanini
 */

let nt1 = document.querySelector("#media-1")
let nt2 = document.querySelector("#media-2")
let nt3 = document.querySelector("#media-3")

let danger = document.querySelector(".danger")
let notaAnual = document.querySelector(".media-anual-ponderada")
let notaMinimaTrimestre = document.querySelector(".media-necessaria-tri")
let medias = document.querySelector(".medias")


let btnCalcular = document.querySelector("#btnCalcular")
let btnLimpar = document.querySelector("#btnLimpar")
let inputFields = document.querySelectorAll("input[name='input-nota']")

const zeroFields = ()=>{
    inputFields.forEach(field => {
        field = +'0.0'
        inputFields.innerHTML = field
        console.log(field, typeof field);
    })
}
zeroFields()

function validDigits (str) {       
    return  str.toString().replace(/[^0-9,.]$/g, '') 
    // return  str.toString().replace(/[^0-9]{1}\.[0-9]{2}$/g, '') 
}

for (let i = 0; i < inputFields.length; i++){    
    inputFields[i].addEventListener('blur', e => {
        let field = e.target.value
         if ( field > 10) {
            inputFields[i].value /= 10
         }          
    })
}

for (let i = 0; i < inputFields.length; i++){    
    inputFields[i].addEventListener('input', e => {
        
        let updatedValue = validDigits(e.target.value)
        
        inputFields[i].value = updatedValue
        console.log(updatedValue)      
          
    })
}
btnCalcular.addEventListener('click', e => {  
    e.preventDefault()
    let n1 = nt1.value
    let n2 = nt2.value
    let n3 = nt3.value

    let mediaPonderadaAnual = ((n1*2)+(n2*3)+(n3*5)) / 10
    let mediaMinimaTrimestre = ((6-((n1*0.2)+(n2*0.3)))/0.5)
  
    for (let i = 0; i < inputFields.length; i++){ 
        console.log(typeof n1, typeof n2, typeof n3)
        if (n1 =="" && n2 =="" && n3 == "" ){     
            displayTextError()
            limparCampos()         
        }
      
        else if (n1 == isNaN || n2 == isNaN || n2 == isNaN){
                displayTextError() 
                limparCampos()        
        } else {
            notaAnual.innerHTML = mediaPonderadaAnual.toFixed(1)
            notaMinimaTrimestre.innerHTML = mediaMinimaTrimestre.toFixed(1)
            medias.style.display = "block" 
        }
    }
})

btnLimpar.addEventListener('click', e => { 
    e.preventDefault()      
    limparCampos()

})

function limparCampos() {
    nt1.value = ''
    nt2.value = ''
    nt3.value = ''

    displayTextError()

    nt1.focus()
}

   function displayTextError() {
    let errorTextInterval = setInterval(()=>{           
        danger.innerHTML = "Por favor, preencha os campos acima!*"
        danger.classList.add('text-danger')
       
    },300)
    setTimeout(()=>{
        clearInterval(errorTextInterval)
        danger.classList.remove('text-danger')
        danger.innerHTML = ""
        medias.style.display = "none"
    },3500)

}
