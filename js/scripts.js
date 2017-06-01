$(function(){
  $("#survey").submit(function(event){
    event.preventDefault();

    var cdtype = $("input:radio[name=cdtype]:checked").val();
    var nameInput = $("input#name").val();
    var address = $("input#address").val();

    $("#receipt").text(cdtype + address + nameInput);
    // $("#receipt").text(address);
    // $("#receipt").text(nameInput);
    $("#receipt").show();
  });

//Back end above this line


});
