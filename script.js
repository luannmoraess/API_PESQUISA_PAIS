let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    

    fetch(finalURL)
    
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);

            let htmlContent = "";

            if (data[0].flags && data[0].flags.svg) {
                htmlContent += `
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Flag:</h4>
                            <img src="${data[0].flags.svg}" class="flag-img">
                        </div>
                    </div>`;
            }

            if (data[0].capital) {
                htmlContent += `
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Capital:</h4>
                            <span>${data[0].capital[0]}</span>
                        </div>
                    </div>`;
            }

            if (data[0].continents) {
                htmlContent += `
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Continent:</h4>
                            <span>${data[0].continents[0]}</span>
                        </div>
                    </div>`;
            }

            if (data[0].population) {
                htmlContent += `
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Population:</h4>
                            <span>${data[0].population}</span>
                        </div>
                    </div>`;
            }

            if (data[0].currencies && data[0].currencies[Object.keys(data[0].currencies)]) {
                htmlContent += `
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Currency:</h4>
                            <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
                        </div>
                    </div>`;
            }

            if (data[0].languages) {
                htmlContent += `
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Common Languages:</h4>
                            <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
                        </div>
                    </div>`;
            }

            result.innerHTML = htmlContent;
            
        })
        .catch((error) => {
            console.error("Erro ao buscar dados:", error);
        });
});
