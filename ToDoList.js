$(document).ready(function(){
    $("#input").blur(function(){  //On unfocus input bar
        $("#display").append("<li><input type='checkbox' class='checkbox'><span class='item'>" + Value("#input") + "</span></li>"); //Create list-item containing checkbox & content
        $("#input").val(""); //Clean up input bar
        $(".checkbox").click(function(){
            $(this).next().css({"text-decoration": "line-through"}); //Click checkbox to elide the content
        });
    });
});

$(document).ready(function(){
    $("button").click(function(){
      $("ul").empty(); //Click button to empty the list
    });
});

function Value(id) {  //Get value from input bar
    var value = $(id).val();
    return value;
}