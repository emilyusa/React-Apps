function search(){
    console.log("search");
}

window.onload=function(){
    $("#search").click(callServerWithoutParms);
}


/*
$(document).ready(function() { 'use strict';
 */
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