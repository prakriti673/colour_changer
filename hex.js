const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn=document.getElementById("btn");
const getcolor=document.querySelector(".color");  //.color indicates id color
const getbtn=document.querySelector(".buttonhere");
const headbg=document.querySelector(".container h2");

btn.addEventListener('click',function()
{
    let hexcolor="#";
    for(let i=0;i<6;i++)
    {
        hexcolor+=hex[getRandom()];
    }
    // const randomNumber=getRandom();
    // console.log(randomNumber);

    document.body.style.backgroundColor = hexcolor;
    getcolor.textContent = hexcolor;
    getbtn.style.color= hexcolor;
    headbg.style.color= hexcolor;
    //console.log(document.body);
});

function getRandom()
{
    return x=Math.floor(Math.random() * hex.length);
}