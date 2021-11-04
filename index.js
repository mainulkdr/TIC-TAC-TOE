var p1Score = 0;
var p2Score = 0;
var tie = 0;
var turn = 1;

function checkWin(){
   if ($(".row-1 .box.X").length === 3 
   || $(".row-2 .box.X").length === 3
   || $(".row-3 .box.X").length === 3
   || $(".col-1.X").length === 3
   || $(".col-2.X").length === 3
   || $(".col-3.X").length === 3
   || $("#1").hasClass("X")
        &&$("#5").hasClass("X")
        &&$("#9").hasClass("X")
    || $("#3").hasClass("X")
        &&$("#5").hasClass("X")
        &&$("#7").hasClass("X")){
       console.log("Working")
   }
}




$(".box").click(function(){
    if (turn ===1 ){
        $(this).text("X")
        $(this).addClass("X")
        turn = 2;
        $("#turn").text(2)
        checkWin()
    }
    else
    {
        $(this).text("O")
        $(this).addClass("O")
        turn =1;
        $("#turn").text(1)
    }
})