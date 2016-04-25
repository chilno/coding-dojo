function valAppend() {
    var fName = $(".fname").val();
    var lName = $(".lname").val();
    var email = $(".email").val();
    var contact = $(".contact").val();
    var desc= $(".description").val();
    $("#contacts").append("<a class='card' href='#'><div class='front'><h1>"+fName+"</h1><h1>"+lName+"</h1><p><img src='email.jpg'> email: "+email+"</p><p><img src='phone.png'> Phone: "+contact+"</p><div class='arrow'></div></div><div class='back'><p>"+desc+"</p></div></a>");
};


$(document).ready(function(){
    $("#btn").click(function(){
        valAppend();
        $("input, textarea").not(":button").val("");
    });
    
    $("#contacts").on({
        mouseenter: function(){
            $(".front ,.back",this).css("box-shadow","0 0 7px 1px grey");
            $(".arrow",this).css("border-top-color","red")
        },
        mouseleave: function(){
            $(".front ,.back",this).css("box-shadow","none");
            $(".arrow",this).css("border-top-color","silver")
        }
    },".card");
    
    
    $("#contacts").on("click",".card",function(){
        $(this).toggleClass("rotateCard");
    });
    
});
