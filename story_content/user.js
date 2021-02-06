function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nJA8gd6YfJ":
        Script1();
        break;
      case "6EUOlAIdZBd":
        Script2();
        break;
      case "6Ob5f6gqn7y":
        Script3();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script2()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzV0wptABgskJa4njrMTxAGTQLCjVg6VCkIevoHuaKlzCpSD6v1/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date(),//STORE DATE
 "name" : player.GetVar("nombre"),
 "email" : player.GetVar("edad"),
 "message" : player.GetVar("message")
}
}

function Script3()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

