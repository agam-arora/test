function generate(){
   fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    document.getElementById("meme_area").innerHTML=data.content;
  })
    };