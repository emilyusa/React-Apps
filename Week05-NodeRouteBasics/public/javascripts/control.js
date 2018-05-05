

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
    $("#calculateFeet").click(transTofeet);
}

function transTofeet() {

    const miles = document.getElementById('userInput');
    console.log('userInput is: ',userInput);

    var requestQuery = {
        user: miles,
    };

    $.getJSON('/calculateFeet', requestQuery, function (result) {
        elf.display.showApacheFiles(result.htmlFilesWritten, result.destinationDir);
        elf.display.fillDisplayArea(JSON.stringify(result, null, 4));
        console.log(result);
    }).done(function () {
        elf.display.showDebug('Walk loaded second success');
    })
        .fail(function (jqxhr, textStatus, error) {
            elf.display.showDebug('Walk loaded error: ' + jqxhr.status + ' ' + textStatus + ' ' + error);
        })
        .always(function () {
            elf.display.showDebug('Walk loaded complete');
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

