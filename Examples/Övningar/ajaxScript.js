var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {// When readystate changes
    // The following conditional check will not work locally - only on a server
    if(xhr.status === 200) {                      // If server status was ok
        responseObject = JSON.parse(xhr.responseText);

        // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
        var newContent = '';
        for (var i = 0; i < responseObject.movieData.length; i++) { // Loop through object
            newContent += '<div>';
            newContent += responseObject.movieData[i].playTime + '<br />';
            newContent += responseObject.movieData[i].date + '<br />';
            newContent += '</div>';
        }

        // Update the page with the new content
        document.getElementById('json').innerHTML = newContent;

    }
};

xhr.open('GET', 'data/data.json', true);
xhr.send(null);
