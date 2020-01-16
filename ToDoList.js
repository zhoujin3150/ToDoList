$(document).ready(function(){
    $("#input").blur(function(){
        $("ul").append("<il></il><br>");
    });
});

function addRow(id){

}

function addCheckBox(id){
    var row;
    var checkBox = $('<input type="checkbox" />');
    $(row).append(checkBox);
    return row;
}