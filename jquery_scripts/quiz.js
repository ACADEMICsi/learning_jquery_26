//jQuery
$(document).ready(function() {
     count = 0;

     function calc() {

        count = 0;
        let qn1 = $("input[name='qn1']:checked").val();
    let qn2 = $("input[name='qn2']:checked").val();
    let qn3 = $("input[name='qn3']:checked").val(); 
    

    if(qn1 === "California") {
        count++; 
    } 
    if(qn2 === "HTML") {
        count++;
    }
    if(qn3 === "Step by step procedures"){
        count++;
    } 
    
    $("#results").text(`Score ${count} of 3`);
     } 

$("button").click(function() {
    //alert("here  "+count);
    calc();
      
    }); 

$(document).keydown(function(event) {
    if(event.key === "Enter")
        calc();
        
    });
});