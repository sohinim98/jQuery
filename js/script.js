$(document).ready(function() {
    //id #, class., otherwise simple for system-tags
    $("#hidden").hover(function() {
        $(this).css("color","black");
        //this refers to the current object #hidden
    },
    function() {
        $(this).hide();
        //callback function, ie, when not hovering anymore Note: will be hidden forever
        //$(this).css("display","none");
    });
    $("button").click(function() {
        alert("I'm alerting you");
    });
});