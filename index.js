var fields = document.querySelectorAll("#form-use-create, [name]");
var user = {};

function addLine(dataUser){

  var tr = document.createElement("tr");

  tr.innerHTML = "";

}
document.getElementById("form-user-create").addEventListener("submit", function(event){

  event.preventDefault();

  fields.forEach(function(field, index){

    if(field.name == "gender"){
  
      if(field.checked){
        user[field.name] = field.value;
      }
  
    }else{
  
      user[field.name] = field.value;
      
    }
  
  });

  addLine(user);

});