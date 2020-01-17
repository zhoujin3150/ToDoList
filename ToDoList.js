$(document).ready(function(){
    $("#input").blur(function(){
        var content = document.getElementById("input").value;
        var checkBox = addCheckBox();
        $("ul").append("<il><input type='checkbox'></input>" + content +"</il><br>");
    });
});

function addRow(id){

}

function addCheckBox(){
    var checkBox = $('<input type="checkbox" />');
    return checkBox;
}

function addContent(){
    var rawContent = $("#input");
    var content = rawContent;
    return content;
}