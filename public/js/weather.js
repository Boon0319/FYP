var input = document.querySelector('.nameinput')
var namep = document.querySelector('.name')
var tempp = document.querySelector('.temp')
var descp = document.querySelector('.desc')
var button = document.querySelector('.btn')


button.addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=960c23899dca9b60e962bef5bf0140c7')
    .then(response => response.json())
    //.then(data => console.log(data)
    
    .then(data =>
      {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];

      

      namep.innerHTML = nameValue;
      descp.innerHTML = descValue;
      tempp.innerHTML = tempValue + "K" ;
      input.value ="";
    
    }
    )
    
    .catch(err => alert("Wrong city name!"));
    })