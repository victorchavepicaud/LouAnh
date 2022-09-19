const img = document.querySelector('.picture');
const sussy = ["blue","green","orange","pink","purple","red"]
function go(){
    const div = document.createElement('div');
    div.textContent ="❤️";
    div.classList.add("heart");
    div.style.left=randint(0,100)+"vw";
    div.style.top = "-40px";
    div.style.fontSize = randint(10,20)/10+"rem";
    // sus.style.width = randint(50,100)+"px";
    // sus.style.height = sus.style.width;
    // sus.style.background = `url(./sussy/sus_${sussy[randint(0,sussy.length)]}.png) no-repeat center/contain`
    // sus.style.opacity=Math.random()+0.2;
    div.style.animationDuration = (Math.random()*10)+5+"s";
    document.body.appendChild(div);
    setTimeout(()=>div.remove(),20000)
}
let randint= (min,max)=>{
    return Math.round(Math.random() * (max - min )) + min;
}
setInterval(go,100)