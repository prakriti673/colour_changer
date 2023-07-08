const colors=["red","green","blue","yellow","#f6f6fa","rgba(123,456,765)"];
const btn=document.getElementById("btn");
const getcolor=document.querySelector(".color");
const getbtn=document.querySelector(".buttonhere");
const headbg=document.querySelector(".container h2");
btn.addEventListener('click',function()
{
    const randomNumber=getRandom();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    getcolor.textContent = colors[randomNumber];
    getbtn.style.color= colors[randomNumber];
    headbg.style.color= colors[randomNumber];
});

function getRandom()
{
    return x=Math.floor(Math.random() * colors.length);
}