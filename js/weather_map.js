(function () {
    "use strict";


    var long = 29.4241;
    var lat = -98.4936;
    var longLat ="29.4241,-98.4936";
    var latLngObject = {
        lng: long,
        lat: lat
    };
    //MapBox API
    mapboxgl.accessToken = weatherMapBoxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [lat, long]
    });

    //geocode is a method to search for coordinates based on a physical address and return
    function geocode(search, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function (res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function (data) {
                return data.features[0].center;
            });
    }

    // reverseGeocode is a method to search for a physical address based on inputted coordinates
    function reverseGeocode(coordinates, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
            .then(function (res) {
                return res.json();
            })
            // to get all the data from the request, comment out the following three lines...
            .then(function (data) {
                return data.features[0].place_name;
            });
    };

    //clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, partly-cloudy-night
    var weatherIcons = {
        clearDay: "<i class=\"wi wi-day-sunny\"></i>",
        clearNight: "<i class=\"wi wi-night-clear\"></i>",
        rain: "<i class=\"wi wi-rain\"></i>",
        snow: "<i class=\"wi wi-snow\"></i>",
        sleet: "<i class=\"wi wi-sleet\"></i>",
        wind: "<i class=\"wi wi-windy\"></i>",
        fog: "<i class=\"wi wi-fog\"></i>",
        cloudy: "<i class=\"wi wi-cloudy\"></i>",
        partlyCloudyDay: "<i class=\"wi wi-day-cloudy\"></i>",
        partlyCloudyNight: "<i class=\"wi wi-night-alt-cloudy\"></i>",
        failToIdentify: "<i class=\"wi wi-meteor\"></i>"
    };

    function generateIcon(weatherTag) {
        if (weatherTag === 'clear-day'){
            return weatherIcons.clearDay;
        }else if (weatherTag === 'clear-night'){
            return weatherIcons.clearNight;
        }else if (weatherTag === 'rain'){
            return weatherIcons.rain;
        }else if (weatherTag === 'snow'){
            return weatherIcons.snow;
        }else if (weatherTag === 'sleet'){
            return weatherIcons.sleet;
        }else if (weatherTag === 'wind'){
            return weatherIcons.wind;
        }else if (weatherTag === 'fog'){
            return weatherIcons.fog;
        }else if (weatherTag === 'cloudy'){
            return weatherIcons.cloudy
        }else if (weatherTag === 'partly-cloudy-day'){
            return weatherIcons.partlyCloudyDay;
        }else if (weatherTag === 'partly-cloudy-night'){
            return weatherIcons.partlyCloudyNight;
        }else return weatherIcons.failToIdentify;
    }

    function removeDashFromString(str) {
        var newString = str.replace(/-/g," ");
        return newString;
    }

    function latLngToString(lngLatObj) {
        return lngLatObj.lat + ","+lngLatObj.lng;
    }

    function sliceAddress(address) {
        var sliceLocation = address.search(",");
        var returnAdd = address.slice(sliceLocation+1,address.length);
        return returnAdd;
    }


    //
    function getWeather(locationlngLat, latLngCord) {
        var darkSkyAPISanAntonio = $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/"+locationlngLat);

        reverseGeocode(latLngCord,weatherMapBoxToken).then(function (results) {
            // console.log(results);
            // console.log(sliceAddress(results));
            $('#locationText').html(sliceAddress(results));
        });


        darkSkyAPISanAntonio.done(function (data) {
            console.log(data);

            //today *****************************************************************/
            var todayDate = new Date(data.currently.time * 1000);
            $('#todayDate').html("<b>" + todayDate + "</b>");
            // console.log(todayDate);
            //    temperature
            var todayHigh = data.daily.data[0].temperatureHigh;
            var todayLow = data.daily.data[0].temperatureLow;
            // var todayTemp = data.currently.temperature;
            // console.log(todayTemp);
            $('#todayTemp').html(todayHigh + "<span>&deg;</span> / " + todayLow + "<span>&deg;</span>");
            //    icon
            var todayIcon = generateIcon(data.currently.icon);
            $('#todayIcon').html(todayIcon);
            var todayweatherTag = removeDashFromString(data.currently.icon);
            //    weather
            var todayWeather = data.currently.summary;
            // console.log(todayWeather);
            $('#todayWeather').html("<b>" + todayweatherTag + ": </b>" + todayWeather);
            //humidity
            var todayHumid = Math.floor(data.currently.humidity * 100);
            // console.log(todayHumid);
            $('#todayHumidity').html("<b>Humidity: </b>" + todayHumid);
            //    wind
            var todayWind = data.currently.windSpeed;
            // console.log(todayWind);
            $('#todayWind').html("<b>Wind: </b>" + todayWind);
            //    pressure
            var todayPressure = data.currently.pressure;
            // console.log(todayPressure);
            $('#todayPressure').html('<b>Pressure: </b>' + todayPressure);



            //    tomorrow **************************************************************/
            var tomorrowDate = new Date(data.daily.data[1].time * 1000);
            // console.log(tomorrowDate);
            $('#tomorrowDate').html("<b>" + tomorrowDate + "</b>");

            //    Temperature
            var tomorrowHigh = data.daily.data[1].temperatureHigh;
            var tomorrowLow = data.daily.data[1].temperatureLow;
            $('#tomorrowTemp').html(tomorrowHigh + "<span>&deg;</span> / " + tomorrowLow + "<span>&deg;</span>");

            //    icon
            var tomorrowIcon = generateIcon(data.daily.data[1].icon);
            $('#tomorrowIcon').html(tomorrowIcon);
            var tomWeatherTag = removeDashFromString(data.daily.data[1].icon);
            //    weather
            var tomorrowWeather = data.daily.data[1].summary;
            $('#tomorrowWeather').html("<b>" + tomWeatherTag + ": </b>" + tomorrowWeather);

            //    humidity
            var tomorrowHumidity = Math.floor(data.daily.data[1].humidity * 100);
            $('#tomorrowHumidity').html("<b>Humidity: </b>" + tomorrowHumidity);

            //    wind
            var tomorrowWind = data.daily.data[1].windSpeed;
            $('#tomorrowWind').html("<b>Wind: </b>" + tomorrowWind);

            //    pressure
            var tomorrowPressure = data.daily.data[1].pressure;
            // console.log(tomorrowPressure);
            $('#tomorrowPressure').html('<b>Pressure: </b>' + tomorrowPressure);



            //    day after tomorrow *******************************************************************/
            var dayAfterDate = new Date(data.daily.data[2].time * 1000);
            // console.log(dayAfterDate);
            $('#dayAfterTomorrowDate').html("<b>" + dayAfterDate + "</b>");

            //    Temperature
            var dayAfterHigh = data.daily.data[2].temperatureHigh;
            var dayAfterLow = data.daily.data[2].temperatureLow;
            $('#dayAfterTemp').html(dayAfterHigh + "<span>&deg;</span> / " + dayAfterLow + "<span>&deg;</span>");

            //    icon
            var dayAfterIcon = generateIcon(data.daily.data[2].icon);
            $('#dayAfterIcon').html(dayAfterIcon);
            var dayAfterTag = removeDashFromString(data.daily.data[2].icon);
            //    weather
            var dayAfterWeather = data.daily.data[2].summary;
            $('#dayAfterWeather').html("<b>" + dayAfterTag + ": </b>" + dayAfterWeather);

            //    humidity
            var dayAfterHumidity = Math.floor(data.daily.data[2].humidity * 100);
            $('#dayAfterHumidity').html("<b>Humidity: </b>" + dayAfterHumidity);

            //    wind
            var dayAfterWind = data.daily.data[2].windSpeed;
            $('#dayAfterWind').html("<b>Wind: </b>" + dayAfterWind);

            //    pressure
            var dayAfterPressure = data.daily.data[2].pressure;
            // console.log(dayAfterPressure);
            $('#dayAfterPressure').html('<b>Pressure: </b>' + dayAfterPressure);


        }).fail(function () {
            alert("ERROR: Dark Sky API Failed.");
        });
    }
    getWeather(longLat,latLngObject);


    var markerOptions = {
        color: "#ff0000",
        draggable: true
    };

    var marker = new mapboxgl.Marker(markerOptions)
        .setLngLat([lat, long])
        .addTo(map);


    function onDragEnd() {
        var lngLat = marker.getLngLat();
        getWeather(latLngToString(lngLat),lngLat);
        // map.flyTo(lngLat);
        // console.log(lngLat);
    }
    marker.on('dragend', onDragEnd);






})();