// var buttons=document.querySelectorAll(".drum");
// for(var i=0;i<buttons.length;i++)
// {
//     buttons[i].addEventListener("click",playmusic);
// }
document.addEventListener("keypress",callback);
function callback(event)
{
    playmusic(event.key);
};
function playmusic(key)
{
    //var button=this.innerHTML;
    switch(key)
    {
            case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
            case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
            case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
            case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
            case "j":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
            case "k":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
            case "l":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
            default:
                alert("not valid");
                break;

    }
    var animate=document.querySelector("."+key);
    animate.classList.add("changecolor");
    setTimeout(function()
    {
        animate.classList.remove("changecolor");
    },"100");
        
    
}
function BellBoy(name,exp,work)
{
    this.name=name;
    this.exp=exp;
    this.work=work;
    this.clean=function()
    {
        alert(this.name+" is "+this.work);
    }
}
var worker=new BellBoy("raju",5,"washing");
worker.clean();