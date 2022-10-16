function createMap() {
    return new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 41.881832, lng: -87.623177 },
    });
}

function getURL(url, apiKey, color) {
    const apiUrl = `${url}?key=${apiKey}&rt=${color}&outputType=JSON`;
    return apiUrl;
}


function getTrainLocation(apiURL) {
    //.then( (train) => console.log(train))
    console.log(apiURL);
    fetch(apiURL, {mode:'cors'}).then( (data) => console.log(data));

}


function main() {
    const map = createMap();
    const svgMarker = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8.5,
        fillColor: "#F00",
        fillOpacity: 1.0,
        strokeWeight: 1.0
    };
    const marker = new google.maps.Marker({
        position: { lat: 41.94743, lng: -87.65363 },
        map: map,
        icon: svgMarker,
    });
    const apiTrainCurrentPositionURL = getURL('https://lapi.transitchicago.com/api/1.0/ttpositions.aspx', '7612a994470f4195b0d9f3a2c5b56947', 'red');
    const apiData = getTrainLocation(apiTrainCurrentPositionURL);
    return 0;
}
