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
        $("#but1").text("Vote");
        $("#but2").text("Vote");
        $("#but3").text("Vote");
        $("#but4").text("Vote");
        $("#but5").text("Vote");
        $("#but6").text("Vote");

        $(".chooseCounty").hide();
        
        if($("#county").val()==="Nairobi"){
            $(".president").show();
            $("#t").show();
            $(".nameOfCounty").text($("#county").val());
            $(".governor1").show();
            $("#t1").show();
            
        }
        else if ($("#county").val()==="Kiambu"){
            $(".president").show();
            $("#t").show();
            $(".nameOfCounty").text($("#county").val());
            $(".governor2").show();
            $("#t2").show();
            
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