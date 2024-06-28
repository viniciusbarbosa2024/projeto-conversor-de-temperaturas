function conversão() {
    const txtEscala1 = document.getElementById('escala1')
    const txtEscala2 = document.getElementById('escala2')
    const txtResultado = document.getElementById('resultado')
    const txtTemperatura = document.getElementById('temperatura')

    const escala1 = txtEscala1.value
    const escala2 = txtEscala2.value

    if (txtTemperatura.value.length === 0) {
        txtTemperatura.value = 0   
    }

    const temperatura = Number(txtTemperatura.value)
    let temperaturaConvertida = null


    if (escala1 === escala2) {
        // "Conversão" entre duas escalas iguais
        txtResultado.innerHTML = '<p>A conversão só pode ser feita entre duas escalas termométricas distintas</p>'   
    } else if (escala1 === 'celsius' && escala2 === 'fahrenheit') {
        //Conversão de celsius para fahrenheit
        temperaturaConvertida = 1.8*temperatura + 32
        temperaturaConvertida.toFixed(2)

        txtResultado.innerHTML = `<p>${temperatura}°C é equivalente a ${temperaturaConvertida.toFixed(2)}°F</p>`
    } else if (escala1 === 'fahrenheit' && escala2 === 'celsius') {
        //Conversão de fahrenheit para celsius

        temperaturaConvertida = (temperatura -32)/1.8

        txtResultado.innerHTML = `<p>${temperatura}°F é equivalente a ${temperaturaConvertida.toFixed(2)}°C</p>`
    } else if (escala1 === 'celsius' && escala2 === 'kelvin') {
        //Conversão de celsius para kelvin

        temperaturaConvertida = temperatura + 273.15

        txtResultado.innerHTML = `<p>${temperatura}°C é equivalente a ${temperaturaConvertida.toFixed(2)}K</p>`
    } else if (escala1 === 'kelvin' && escala2 === 'celsius'){
        //Conversão de kelvin para celsius

        temperaturaConvertida = temperatura - 273.15

        txtResultado.innerHTML = `<p>${temperatura}K é equivalente a ${temperaturaConvertida.toFixed(2)}°C</p>`
    }
}