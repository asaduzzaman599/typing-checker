const quote = ['My mission is to create a world where we can live in harmony with nature.',"Management must speak with one voice. When it doesn't management itself becomes a peripheral opponent to the team's mission.","Every person above the ordinary has a certain mission that they are called to fulfill.","Bitter experience has taught us how fundamental our values are and how great the mission they represent."]; 

let text = quote[Math.round(Math.random()*3)];
document.getElementById("genarate-text").innerText = text;
document.addEventListener('keyup',e=>{
    //console.log("hello");
      if(((/^[a-zA-Z]/.test(e.key) && e.key.length == 1) || e.key == " " )&& text.length>0){
        const temp = text[0];
       
        text = text.slice(1,);
        const span = document.createElement('span');
    if(e.key ==temp){
        span.classList.add('text-green-400');
       
        console.log(span);
    }else{

        span.classList.add('text-red-400');
    }
     if(temp == " "){
        span.innerText='-'
    }else{ 
        
    span.innerText=temp;
     } 
    document.getElementById('matching-text').appendChild(span);
    document.getElementById("genarate-text").innerText = text;

      }
})