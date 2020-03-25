var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {// When readystate changes
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var newContent = '';
    for (var i = 0; i < responseObject.todos.length; i++) { // Loop through object
        newContent += '<div>';
        newContent += responseObject.todos[i].todoTitle + '<br />';
        newContent += responseObject.todos[i].todoContent + '<br />';
        newContent += responseObject.todos[i].todoDate;
        newContent += '</div>';
    }

    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;

  }
};

xhr.open('GET', 'data/data.json', true);  // Dummy JSON Data
xhr.send(null);                                 // Send the request