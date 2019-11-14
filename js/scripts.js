$(document).ready(function(){
    var presidentVote1 = 0;
    var presidentVote2 = 0;
    var governorVote1 = 0;
    var governorVote2 = 0;

    $("button#election").one("click",function(){
        $(".details").hide();
        $(".chooseCounty").show();
    });
    $("button#submit-county").click(function(){
        if($("#county").val()==="nairobi" || $("#county").val()==="kiambu"){
            $(".chooseCounty").hide();
            $(".prezzo").show();
            $(".nameOfCounty").text($("#county").val());
            $(".governor").show();
            $("#but1").text("Vote");
            $("#but2").text("Vote");
            $("#but3").text("Vote");
            $("#but4").text("Vote");
        }
    });
    $("#Candidate1").one("click",function(){
        presidentVote1+=1;
        $("#but1").text("+1");
        $("#Candidate2").attr("disabled",true);
        alert(presidentVote1);
    });
    $("#Candidate2").one("click",function(){
        presidentVote2+=1;
        $("#but2").text("+1");
        $("#Candidate1").attr("disabled",true);
        alert(presidentVote2);
    });
    $("#Candidate3").one("click",function(){
        governorVote1+=1;
        $("#but3").text("+1");
        $("#Candidate4").attr("disabled",true);
        alert(governorVote1);
    });
    $("#Candidate4").one("click",function(){
        governorVote2+=1;
        $("#but4").text("+1");
        $("#Candidate3").attr("disabled",true);
        alert(governorVote2);
    });
    
});