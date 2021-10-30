// Use your API key
// watch video to see how to grab that -> https://www.loom.com/share/93891db731f54c9f9d1cffcc6d033ae2
const apiKey = "f458032572b42773b98a8356991a48e2";
const tempEle = document.querySelector("#tempEle");
const sendZipBtn = document.querySelector("#sendZipBtn");
const zipcodeInput = document.querySelector("#zipcodeInput");

//on click of the button call the function and pass the value inside of it
sendZipBtn.addEventListener("click", event => {
    getWeatherByZip(zipcodeInput.value);
});


// build the API url using YOUR API
// URL stucture is here https://openweathermap.org/current#zip
// On anther tab add this URL and fillout required fields to analyze what the object looks like
// pass that URL to your fetch
// grab temp and city name and store each in a variable
// transform the temprature from Kelvin to Farenheit using the converKelvinToFahrenheit() provided
// get rid of all the decimal points https://www.w3schools.com/jsref/jsref_floor.asp
// write the sentence and "It is 55 in New York" swapping out the temp and city with the values in your variables

let getWeatherByZip = (zipCode) => {  
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`;

    //ADD YOUR CODE HERE
    
};

// converting Kelvin to Fahrenheit
// found math  here https://www.w3schools.com/howto/howto_js_temperature_converter.asp
let converKelvinToFahrenheit = (kelvinDeg) => {
    return ((kelvinDeg-273.15)*1.8)+32;
}; 




