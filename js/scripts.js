$(document).ready(function(){
    var presidentVote1 = 0;
    var presidentVote2 = 0;

    $("button#election").one("click",function(){
        $(".chooseCounty").show();
    });
    $("button#submit-county").click(function(){
        if($("#county").val()==="nairobi"){
            $(".chooseCounty").hide();
            $(".votingPage").show();
            $("#but1").text("Vote");
            $("#but2").text("Vote");
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
});