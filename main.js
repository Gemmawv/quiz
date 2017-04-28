
$(document).ready(function () {

      $('.questions').hide();
      $('#question-1').show();


    var score = 0;
    runningTotal = document.getElementById('Total')
    runningTotal.innerHTML = "score: " + score;
    $(".correct").click(function () {
        $(this).removeClass("btn-primary").addClass("btn-success").off("click");
        $(this).siblings().removeClass("btn-primary").off("click");
        score += 1;
         $(this).parents().next('.questions').show();
        

        return runningTotal.innerHTML = "Score: " + score + "/10";
    });
    $(".incorrect").click(function () {
        $(this).removeClass("btn-primary").addClass("btn-danger").off("click");
        $(this).siblings().removeClass("btn-primary").off("click");
         $(this).parents().next('.questions').show();
        
    });

});



