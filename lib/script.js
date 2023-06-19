/**
 * App Calculadora de Média Ponderada
 * Colégio Leôncio Correia 2023
 * Desenvolvido por Ledson Vanini
 */


let btnCalcular = document.querySelector("#btnCalcular")

btnCalcular.addEventListener('click', e => {
    e.preventDefault()
    let nt1 = document.querySelector("#media-1").value
    let nt2 = document.querySelector("#media-2").value
    let nt3 = document.querySelector("#media-3").value
    let notaAnual = document.querySelector(".media-anual-ponderada")
    let notaMinimaTrimestre = document.querySelector(".media-necessaria-tri")

    if (nt1 == 0 && nt2 == 0 && nt3 == 0){
        alert("Por favor, preencha ao menos um campo com as notas!")
        notaAnual.innerHTML = '0.0'
        notaMinimaTrimestre.innerHTML = '0.0'
        
    } else {

        const n1 = parseFloat(nt1)
        const n2 = parseFloat(nt2)
        const n3 = parseFloat(nt3)
    
        let mediaPonderadaAnual = ((n1*2)+(n2*3)+(n3*5)) / 10
        let notaMinima = ((6-((n1*0.2)+(n2*0.3)))/0.5)
    
        notaAnual.innerHTML = mediaPonderadaAnual.toFixed(1)
        notaMinimaTrimestre.innerHTML = notaMinima.toFixed(1)
    }

})