var xhr = new XMLHttpRequest();

xhr.onload = function () {
    let responseObject = JSON.parse(xhr.responseText);
            var newContent = "";
            for (var i = 0; i < responseObject.movieData.length; i++) {
                newContent += responseObject.movieData[i];
                console.log(newContent);
            }
            document.getElementById("content-container").innerHTML = newContent;
};

xhr.open('GET', 'data/data.json', true);
xhr.send(null);