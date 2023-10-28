let couples=[
    {
        gf:"Bindu",
        bf:"Dileep"
    },
    {
        gf:"Honey",
        bf:"Hetwik"
    },
    {
        gf:"Lasya",
        bf:"Arya"
    },
];
let randomNumber=Math.floor(Math.random()*couples.length)
let result=document.getElementById("output")

function winner_one(){
    result.innerHTML=couples[randomNumber].bf +"❤️"+couples[randomNumber].gf
    
}
function winner_two(){
    result.innerHTML=couples[randomNumber].bf +"❤️"+couples[randomNumber].gf
}
function winner_three(){
    result.innerHTML=couples[randomNumber].bf +"❤️"+couples[randomNumber].gf
}
