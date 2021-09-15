let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score")
const scoreBoard_div = document.querySelector(".score_board");
const message_div = document.querySelector(".message");
const para_div=message_div.lastChild;
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let seasor_div = document.getElementById("seasors");

const userSmall= "user".fontsize(3).sub();
const compSmall = "comp".fontsize(3).sub();

function getCompChoics(){
    const choices = ['r','p','s' ];
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}

function returnToWord( letter ){
    if ( letter == 'r' ) return "Rock" ;
    if ( letter == 'p' ) return "Paper" ;
    if ( letter == 's' ) return "Seasors" ;
}

function beatCutBreak( u , c ){
   if( u=='r' && c=='s' ) return " breaks " ;
   if( u=='s' && c=='p' ) return " cuts " ;
   if( u=='p' && c=='r' ) return " covers " ;
   if ( u==c ) return " does nothing on "

}
function giveDiv(letter){
    if (letter=='r') return "rock";
    if (letter=='p') return "paper";
    if (letter=='s') return "seasors";
}

// .choice{
//     border: 6px solid white;
//     border-radius: 50%;
//     display: inline-block;
//     margin: 0px 20px;
//     padding:5px;
//     transition: backgroun-color 0.3s ease;
// }

function rockImg(){
    let img11 =document.createElement('img');
    img11.src='img/rock1.png';
    img11.style.height='100px';
    img11.style.display='inline-block';
    message_div.appendChild(img11);
}

 function paperImg(){
    let img22 =document.createElement('img');
    img22.src='img/paper1.png';
    img22.style.height='100px';
    img22.style.display='inline-block';
    message_div.appendChild(img22);
 } 

 function seasorImg(){
    let img22 =document.createElement('img');
    img22.src='img/seasors1.png';
    img22.style.height='100px';
    img22.style.display='inline-block';
    message_div.appendChild(img22);
 }

 function constant(){
    let brr =document.createElement('br');
    message_div.appendChild(brr);
    let brr1 =document.createElement('br');
    message_div.appendChild(brr1);
   

    let para =document.createElement('h5');
    para.textContent="Your Turn : Computer";
    message_div.appendChild(para);
 }

function img(img1,img2){
    if (img1=='r' && img2=='s'){
        constant();
        rockImg();
        seasorImg();
    }

    if (img1=='r' && img2=='p'){
       constant();
       rockImg();
       paperImg();
    }

    if (img1=='r' && img2=='r'){
       constant();
       rockImg();
       rockImg();
    }
    if (img1=='p' && img2=='s'){
        constant();
        paperImg();
        seasorImg();
    }

    if (img1=='p' && img2=='p'){
       constant();
       paperImg();
       paperImg();
    }

    if (img1=='p' && img2=='r'){
       constant();
       paperImg();
       rockImg();
    }
    if (img1=='s' && img2=='s'){
        constant();
        seasorImg();
        seasorImg();
    }

    if (img1=='s' && img2=='p'){
       constant();
       seasorImg();
       paperImg();
    }

    if (img1=='s' && img2=='r'){
       constant();
       seasorImg();
       rockImg();
    }
    
}

function win( user , comp ){
    if(userScore <= 1){
        userScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        
        message_div.innerHTML = "WON !" ;
        img(user,comp);
        
        document.getElementById( giveDiv(user) ).classList.add('green-glow');
        setTimeout(function() {  document.getElementById( giveDiv(user) ).classList.remove("green-glow"); } , 500  );
    }
    else if(userScore == 2){
        userScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
       
        message_div.innerHTML = "WON !" ;
        img(user,comp);
        
        document.getElementById( giveDiv(user) ).classList.add('green-glow');
        setTimeout(function() {  document.getElementById( giveDiv(user) ).classList.remove("green-glow"); } , 500  );
        alert("You Win !!!!!");
        // document.write("<div  class="alert alert-primary" role="alert"> A simple primary alert—check it out!</div>");
       setTimeout(function() {  location.reload();}, 1000)
    }
       
}

function loss( user , comp ){
    if(compScore <= 1){
        compScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
      
        message_div.innerHTML = "LOSE !" ;
        img(user,comp);

        document.getElementById( giveDiv(user) ).classList.add('red-glow'); 
        setTimeout(function() {  document.getElementById( giveDiv(user) ).classList.remove("red-glow"); } , 500  )
    }
    else if(compScore == 2){
        compScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        message_div.innerHTML = "LOSE !" ;
        img(user,comp);

        document.getElementById( giveDiv(user) ).classList.add('red-glow'); 
        setTimeout(function() {  document.getElementById( giveDiv(user) ).classList.remove("red-glow"); } , 500  );
        alert("You Lose !!!!!");
        setTimeout(function() {  location.reload();}, 1000)
    }
       
}   


function draw( user , comp ){
    message_div.innerHTML = "DRAW !" ;
    img(user,comp);
    document.getElementById( giveDiv(user) ).classList.add('gray-glow');
    setTimeout(function() {  document.getElementById( giveDiv(user) ).classList.remove("gray-glow"); } , 500  )

}

function game(userChoice){
    const getCompChoice = getCompChoics();
    switch( userChoice + getCompChoice ) {
        case "rs":
        case "pr":
        case "sp":
            win( userChoice , getCompChoice );
            break;

        case "rp":
        case "ps":
        case "sr":
            loss( userChoice , getCompChoice );
            break;
        
        case "rr":
        case "ss":
        case "pp":
            draw( userChoice , getCompChoice );
            break;
    }
} 

function main() {

    rock_div.addEventListener('click',function() {
       game("r");
    })

    paper_div.addEventListener('click',function() {
        game("p");
    })    

    seasor_div.addEventListener('click',function() {
        game("s");
    })

}

main();
