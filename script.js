let baseurl = "https://eop2pbhdxpx4kpi.m.pipedream.net?"
console.log(window.opener )
if (window.opener != null){
    
    let keys = Object.keys(window.opener);
    keys.forEach(key => {
        baseurl += key + "=" + obj[key];
        baseurl += "&"
        console.log(key + "=" + obj[key])
    });
}
console.log(baseurl)
