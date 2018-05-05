

window.onload=function(){
    $("#search").click(callServerWithoutParms);
}


function callServerWithoutParms() {

    fetch('/search')
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            $("#displaySearch").html(JSON.stringify(response,null,4));
        })
        .catch((ex) => {
            console.log(ex);
        })

}


window.onload=function(){
    $("#getFeetInMile").click(getFeetInMile);
}

function getFeetInMile() {

    fetch('/getFeetInMile')
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            $("#displayOneMile").html(JSON.stringify(response,null,4));

        })
        .catch((ex) => {
            console.log(ex);
        })
}



// get

window.onload=function(){
    $("#calculateFeetFromMiles").click(transToFeet);

}

const encodeParams = (url, params) => {
    const encodeUri = encodeURIComponent;
    return url + '?' + Object.keys(params)
        .map(key => encodeUri(key) + '=' + encodeUri(params[key]))
        .join('&');
};


function getParams(userInput) {

    const params = {
        "userInput": userInput

    };
    return {userInput, params};
}

function transToFeet() {

    const userInput = 2;
        //document.getElementById('userInput').value;

    const url = encodeParams('/calculateFeetFromMiles', getParams(userInput));
    console.log('transToFeet function is called',url);
    fetch(url)
        .then((checkCall) => {
            return checkCall.json();
        })
        .then((data) => {
            //console.log("data.result is: ",data.result);
            const transResult = userInput + " miles equals " + data.result + " feet";
            $("#displayFeetTrans").html(JSON.stringify(transResult));
        })
        .catch((error) => {
            console.log(error);
        });

}

//post

window.onload=function(){
    $("#calculateCircumference").click(transToCircum);
}

function getRadius(radius) {

    const params = {
        "radius": radius,

    };
    return {radius, params};
}

function transToCircum () {
    const radius = document.getElementById('userInput').value;

    const paramsRadius = getRadius(radius);

    fetch('/calculateCircumference', {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(paramsRadius)
    })
        .then(function(result) {
            return result.json();
        })
        .then(function(result) {
            const circumference = "Circumference is "+result.status+" miles";
            $("#displayCircumTrans").html(JSON.stringify(circumference,null,4));

        })
        .catch(function(error) {
            console.log(error);
        });

}

