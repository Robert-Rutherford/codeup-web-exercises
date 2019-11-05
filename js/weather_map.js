(function () {
    "use strict";
    //MapBox API
    mapboxgl.accessToken = weatherMapBoxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });



    function getWeather() {
        var darkSkyAPISanAntonio = $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSkyKey+"/29.4241,-98.4936");

        darkSkyAPISanAntonio.done(function (data) {
            console.log(data);
            //today
            var todayDate = new Date(data.currently.time * 1000);
            $('#todayDate').html("<b>"+todayDate+"</b>");
            // console.log(todayDate);
        //    temperature
            var todayHigh = data.daily.data[0].temperatureHigh;
            var todayLow = data.daily.data[0].temperatureLow;
            // var todayTemp = data.currently.temperature;
            // console.log(todayTemp);
            $('#todayTemp').html(todayHigh+"<span>&deg;</span> / "+todayLow+"<span>&deg;</span>");
        //    icon

            var todayweatherTag ="empty";
        //    weather
            var todayWeather = data.currently.summary;
            // console.log(todayWeather);
            $('#todayWeather').html("<b>"+todayweatherTag+": </b>"+todayWeather);
        //humidity
            var todayHumid = Math.floor(data.currently.humidity * 100);
            // console.log(todayHumid);
            $('#todayHumidity').html("<b>Humidity: </b>"+todayHumid);
        //    wind
            var todayWind = data.currently.windSpeed;
            // console.log(todayWind);
            $('#todayWind').html("<b>Wind: </b>"+ todayWind);
        //    pressure
            var todayPressure = data.currently.pressure;
            console.log(todayPressure);
            $('#todayPressure').html('<b>Pressure: </b>'+ todayPressure);


        //    tomorrow
            var tomorrowDate = new Date(data.daily.data[1].time * 1000);
            console.log(tomorrowDate);
            $('#tomorrowDate').html("<b>"+tomorrowDate+"</b>");

        //    Temperature
            var tomorrowHigh = data.daily.data[1].temperatureHigh;
            var tomorrowLow = data.daily.data[1].temperatureLow;
            $('#tomorrowTemp').html(tomorrowHigh+"<span>&deg;</span> / "+tomorrowLow+"<span>&deg;</span>");

        //    icon

            var tomWeatherTag = 'also empty';
        //    weather
            var tomorrowWeather = data.daily.data[1].summary;
            $('#tomorrowWeather').html("<b>"+tomWeatherTag+": </b>"+tomorrowWeather);

        //    humidity
            var tomorrowHumidity = Math.floor(data.daily.data[1].humidity * 100);
            $('#tomorrowHumidity').html("<b>Humidity: </b>"+tomorrowHumidity);

        //    wind
            var tomorrowWind = data.daily.data[1].windSpeed;
            $('#tomorrowWind').html("<b>Wind: </b>"+ tomorrowWind);

            //    pressure
            var tomorrowPressure = data.daily.data[1].pressure;
            console.log(tomorrowPressure);
            $('#tomorrowPressure').html('<b>Pressure: </b>'+ tomorrowPressure);


        }).fail(function () {
            alert("ERROR: Dark Sky API Failed.");
        })
    }
    getWeather();

})();