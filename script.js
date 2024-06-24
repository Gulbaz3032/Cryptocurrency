 var btc =  document.getElementById("bitcoin");
 var eth =  document.getElementById("ethereum");
 var doge =  document.getElementById("dogecoin");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": '',
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function() {
    btc.innerHTML = Response.bitcoin.usd;
    eth.innerHTML = Response.ethereum.usd;
    doge.innerHTML = Response.dogecoin.usd;
});