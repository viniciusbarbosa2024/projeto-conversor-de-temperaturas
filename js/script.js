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

    //Funções que serão utilizadas para conversão das temperaturas
    
    celsiusParaFahrenheit = (temperaturaInicial) => 1.8*temperaturaInicial + 32
    
    fahrenheitParaCelsius = (temperaturaInicial) => (temperaturaInicial -32)/1.8

    celsiusParaKelvin = (temperaturaInicial) => temperaturaInicial + 273.15 

    kelvinParaCelsius = (temperaturaInicial) => temperaturaInicial - 273.15


    if (escala1 === escala2) {
        // "Conversão" entre duas escalas iguais
        txtResultado.innerHTML = '<p>A conversão só pode ser feita entre duas escalas termométricas distintas</p>'   
    } else if (escala1 === 'celsius' && escala2 === 'fahrenheit') {
        //Conversão de celsius para fahrenheit
        temperaturaConvertida = celsiusParaFahrenheit(temperatura)

        temperaturaConvertida.toFixed(2)

        txtResultado.innerHTML = `<p>${temperatura}°C é equivalente a ${temperaturaConvertida.toFixed(2)}°F</p>`
    } else if (escala1 === 'fahrenheit' && escala2 === 'celsius') {
        //Conversão de fahrenheit para celsius
        
        temperaturaConvertida = fahrenheitParaCelsius(temperatura)

        txtResultado.innerHTML = `<p>${temperatura}°F é equivalente a ${temperaturaConvertida.toFixed(2)}°C</p>`
    } else if (escala1 === 'celsius' && escala2 === 'kelvin') {
        //Conversão de celsius para kelvin

        temperaturaConvertida = celsiusParaKelvin(temperatura)

        txtResultado.innerHTML = `<p>${temperatura}°C é equivalente a ${temperaturaConvertida.toFixed(2)}K</p>`
    } else if (escala1 === 'kelvin' && escala2 === 'celsius'){
        //Conversão de kelvin para celsius

        temperaturaConvertida = kelvinParaCelsius(temperatura)

        txtResultado.innerHTML = `<p>${temperatura}K é equivalente a ${temperaturaConvertida.toFixed(2)}°C</p>`
    } else if (escala1 === 'fahrenheit' && escala2 === 'kelvin') {
        //Conversão de fahrenheit para kelvin

        temperaturaConvertida = celsiusParaKelvin(fahrenheitParaCelsius(temperatura))

        txtResultado.innerHTML = `<p>${temperatura}°F é equivalente a ${temperaturaConvertida.toFixed(2)}K</p>`
    } else if (escala1 === 'kelvin' && escala2 === 'fahrenheit') {
        //Conversão de kelvin para fahrenheit 

        temperaturaConvertida = celsiusParaFahrenheit(kelvinParaCelsius(temperatura))

        txtResultado.innerHTML = `<p>${temperatura}K é equivalente a ${temperaturaConvertida.toFixed(2)}°F</p>`
    }

    //Limpar caixa de temperatura inicial
    txtTemperatura.value = null
}