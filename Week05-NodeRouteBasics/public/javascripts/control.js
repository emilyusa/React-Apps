

window.onload=function(){
    $("#search").click(callServerWithoutParms);
    $("#getFeetInMile").click(getFeetInMile);
    $("#calculateFeetFromMiles").click(transTofeet);
    $("#calculateCircumference").click(transToCircum);
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


function getFeetInMile() {

    fetch('/getFeetInMile')
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            $("#displayOneMile").html(JSON.stringify(response.result,null,4));

        })
        .catch((ex) => {
            console.log(ex);
        })
}



/* get in client*/

function transTofeet() {

    const miles = document.getElementById('userInput').value;

    fetch('/calculateFeetFromMiles' + '?miles=' + miles)
        .then((response) => response.json())
        .then((response) => {

            const feet=miles+' miles equal '+response.result+' feet';
            $("#displayFeetTrans").html(JSON.stringify(feet,null,4));
        })
        .catch((ex) => {
            console.log(ex);
        })
}


/*post inclient*/

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

