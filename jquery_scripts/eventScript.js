$(document).ready(function(){
    $("h2").on(
        {
            mouseenter : function(){
                $(this).css("background-color", "lightgray");
            },
        
            mouseleave : function() {
                $(this).css("background-color","lightblue");
            },
        
            click : function() {
                $(this).css("background-color", "yellow");
            }
        }
    );

    $("p").click(function(){
        document.title="smerck";
    }); 

    $("a[target='_blank']").hover(function(){
        $("#test").css("color","green");
    }); 

    $("a[target='_blank']").mouseleave(function(){
        $("#test").css("color","black");
        $("#test").text("The text have been chnaged");
    }); 

    $("input:text").focus(function() {
        $(this).css({
            "background-color":"lightgreen",
            "color":"blue",
            "border-radius":"30px"
        }); 
       
    }); 

    $("#send").click(function(){
         let msg = $("#field1").val();
        alert("You enterd "+ msg);
    })
});