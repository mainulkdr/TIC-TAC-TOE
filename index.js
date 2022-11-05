var p1Score = 0;
var p2Score = 0;
var tie = 0;
var turn = 1;

// function checkWinX(){
//    if ($(".row-1 .box.X").length === 3 
//    || $(".row-2 .box.X").length === 3
//    || $(".row-3 .box.X").length === 3
//    || $(".col-1.X").length === 3
//    || $(".col-2.X").length === 3
//    || $(".col-3.X").length === 3
//    || $("#1").hasClass("X")
//         &&$("#5").hasClass("X")
//         &&$("#9").hasClass("X")
//     || $("#3").hasClass("X")
//         &&$("#5").hasClass("X")
//         &&$("#7").hasClass("X")){
//        return true
//    }
// }

// function checkWinO(){
//     if ($(".row-1 .box.O").length === 3 
//     || $(".row-2 .box.O").length === 3
//     || $(".row-3 .box.O").length === 3
//     || $(".col-1.O").length === 3
//     || $(".col-2.O").length === 3
//     || $(".col-3.O").length === 3
//     || $("#1").hasClass("O")
//          &&$("#5").hasClass("O")
//          &&$("#9").hasClass("O")
//      || $("#3").hasClass("O")
//          &&$("#5").hasClass("O")
//          &&$("#7").hasClass("O")){
//         return true
//     }
//  }

//  function clear(){
//      $(".box").empty();
//      $(".X").removeClass("X")
//      $(".O").removeClass("O")
//  }

 function checkTie(){
     if($(".X").length + $(".O").length === 9){
        tie++
        $("#tie").text(tie)
        clear()

     }
 }



// $(".box").click(function(){
//     if (turn ===1 ){
//         $(this).text("X")
//         $(this).addClass("X")
//         turn = 2;
//         $("#turn").text(2)
//         if(checkWinX()){
//             p1Score++
//             $("#p1-score").text(p1Score)
//             clear()
//         }
//         else{
//             checkTie()
//         }

        
//     }
//     else
//     {
//         $(this).text("O")
//         $(this).addClass("O")
//         turn =1;
//         $("#turn").text(1)
//         if(checkWinO()){
//             p2Score++
//             $("#p2-score").text(p2Score)
//             clear()
//         }
//         else{
//             checkTie()
//         }
//     }
// })


// NEW CODE FROM HERE

// function checkWinX(){
//     if(
//         document.getElementsByClassName("row-1")[0].getElementsByClassName("X").length === 3
//         || document.getElementsByClassName("row-2")[0].getElementsByClassName("X").length === 3
//         || document.getElementsByClassName("row-3")[0].getElementsByClassName("X").length === 3
//         || document.getElementsByClassName("col-1")[0].getElementsByClassName("X").length === 3
//         || document.getElementsByClassName("col-2")[0].getElementsByClassName("X").length === 3
//         || document.getElementsByClassName("col-3")[0].getElementsByClassName("X").length === 3
//         || document.getElementById("1").innerHTML === "X" 
//             && document.getElementById("5").innerHTML === "X"
//             && document.getElementById("9").innerHTML === "X"
//         || document.getElementById("3").innerHTML === "X" 
//             && document.getElementById("5").innerHTML === "X"
//             && document.getElementById("7").innerHTML === "X"
//     ) 
//         return true;
//  }

function clear(){
    let boxes = document.getElementsByClassName("box");
    for (let box of boxes)
    {
        box.innerHTML = "";
        box.classList.remove("X");
        box.classList.remove("O");
    }
}


function checkWin(symbol){
    // document.querySelector("[id='1']")
    return (
        document.querySelectorAll(".row-1 ." + symbol).length === 3
        || document.querySelectorAll(".row-2 ." + symbol).length === 3
        || document.querySelectorAll(".row-3 ." + symbol).length === 3
        || document.querySelectorAll(".col-1." + symbol).length === 3
        || document.querySelectorAll(".col-2." + symbol).length === 3
        || document.querySelectorAll(".col-3." + symbol).length === 3
        || document.getElementById("1").innerHTML === symbol 
            && document.getElementById("5").innerHTML === symbol
            && document.getElementById("9").innerHTML === symbol
        || document.getElementById("3").innerHTML === symbol 
            && document.getElementById("5").innerHTML === symbol
            && document.getElementById("7").innerHTML === symbol
    );       
 }

function boxClick(item) {
    if (turn ===1 ){
        item.innerHTML = "X";
        item.classList.add("X")
        turn = 2;
        document.getElementById("turn").innerHTML = "2";
        if(checkWin("X")){
            p1Score++
            document.getElementById("p1-score").innerHTML = p1Score;
            clear()
        }
        // else{
        //     checkTie()
        // }
    }
    else
    {
        item.innerHTML = "O";
        item.classList.add("O")
        // $(this).addClass("O")
        turn =1;
        document.getElementById("turn").innerHTML = "1";
        if(checkWin("O")){
            p2Score++
            document.getElementById("p2-score").innerHTML = p2Score;
            clear()
        }
        // else{
        //     checkTie()
        // }
    }
}