const randcolor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervalid;
const start = document.querySelector("#start")
const setcolor = function(){
    start.setAttribute('disabled'," ")
    const bgcolor = function(){
        document.body.style.backgroundColor = randcolor();
    }
    if(!intervalid){
        intervalid = setInterval(bgcolor,1000)
    }
}
start.addEventListener('click', setcolor)

document.querySelector("#stop").addEventListener('click',()=>{
    clearInterval(intervalid);
    intervalid = null;
    start.removeAttribute('disabled')
})