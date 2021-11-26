var artistinput = document.querySelector('.artist-input');
var songinput = document.querySelector('.song-input');
var btn= document.querySelector('.btn');
var result= document.querySelector('.song');

btn.addEventListener('click', function(name){
    fetch('https://api.lyrics.ovh/v1/' + artistinput.value + '/' + songinput.value)
    .then(response => response.json())    
    .then(data => {
      var nameValue = data['lyrics'];
    
      result.innerHTML = nameValue;
    
    
    }
    
    )
    .catch(err => alert("Please fill out fields below!"));
    })
    