const getApi = (city, apiKey) => {
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
        {
            success: (data, status, xhr) => {
                $('.city').html(data['name'] + ', ' + data['sys']['country'])
                $('.date').html(new Date().toDateString())
                $('.degree').html(Math.floor((((data['main']['temp'] * 1.8) - 459.67) - 32) / 1.8000) + ' °C')
                $('.weather').html(data['weather'][0]['main'])
                $('.error').html('')
            },
            error: (jqXhr, textStatus, errorMessage) => {
                $('.error').html(errorMessage)
                $('.city').html('')
                $('.date').html('')
                $('.degree').html('')
                $('.weather').html('')

            }
        }
    )
}

$('.inp').keyup(e => {
    e.target.value !== '' &&
        getApi(e.target.value, "d2fd5fa1119bc717bc8e9b95c6f9b422")
})