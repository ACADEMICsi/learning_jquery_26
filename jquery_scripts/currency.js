
//global
const currencies = ["USD", "EUR","GBP","TZS","KES"];

function convertCurrency() {
    const amount = $("#amount").val();
    const from = $("#from").val();
    const to = $("#to").val();  

    $.get(
        `https://api.frankfurter.dev/v1/latest?base=${from}`,
        function(data) {
            //let fromRate = data.rates[from];
          //  let toRate = data.rates[to];

           // let exchangeRate = toRate/fromRate;

            let results =amount * data.rates[to];
           // alert("here");
            $("#result").text(
                `${amount} ${from} = ${results.toFixed(2)} ${to}`
            );
        }
    );


}

$(document).ready(function(){
    
currencies.forEach(c => {
    $("#from, #to").append(`<option value="${c}">${c}</option>`);
}); 
// 

$("#convertBtn").click(function(){
    convertCurrency();
});
}); 

