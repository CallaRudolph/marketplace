$(function(){
  $("#survey").submit(function(event){
    event.preventDefault();

    var cdtype = $("input:radio[name=cdtype]:checked").val();
    var nameInput = $("input#name").val();
    var address = $("input#address").val();

    $("#Nam").text(nameInput);
    $("#cd").text(cdtype);
    $("#Addr").text(address);
    $("#receipt").show();
  });

//Back end above this line


});
