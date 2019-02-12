var k;

function readIndex(x) {
    k = x;
}

function readData() {
    var type = document.getElementById("typeofcard");
    var name = document.getElementById("name");
    var street = document.getElementById("street");
    var code = document.getElementById("code");
    var city = document.getElementById("city");
    var country = document.getElementById("country");

    if (k==1) {
        document.getElementById("1").innerHTML = '<div class="added"><div class="title">' + type.value + '</div><div class="content">' +
            '<div class="left"><img src="img/marker.png" width="25" height="45"/></div><div class="right"><b>' + name.value + '</b><br>' + street.value + '<p>' + code.value + ' ' + city.value + ', ' + country.value + '</p></div></div></div>';
    } else if (k==2) {
        document.getElementById("2").innerHTML = '<div class="added"><div class="title">' + type.value + '</div><div class="content">' +
            '<div class="left"><img src="img/marker.png" width="25" height="45"/></div><div class="right"><b>' + name.value + '</b><br>' + street.value + '<p>' + code.value + ' ' + city.value + ', ' + country.value + '</p></div></div></div>';
    } else if (k==3) {
        document.getElementById("3").innerHTML = '<div class="added"><div class="title">' + type.value + '</div><div class="content">' +
            '<div class="left"><img src="img/marker.png" width="25" height="45"/></div><div class="right"><b>' + name.value + '</b><br>' + street.value + '<p>' + code.value + ' ' + city.value + ', ' + country.value + '</p></div></div></div>';
    }
}