$(document).ready(function(){
    var presidentVote1 = 0;
    var presidentVote2 = 0;
    var governorVote1 = 0;
    var governorVote2 = 0;
    var governorVote3 = 0;
    var governorVote4 = 0;
    var mpVote1 = 0;
    var mpVote2 = 0;
    var mpVote3 = 0;
    var mpVote4 = 0;
    var mpVote5 = 0;
    var mpVote6 = 0;
    var mpVote7 = 0;
    var mpVote8 = 0;
    var mcaVote1 = 0;
    var mcaVote2 = 0;
    var mcaVote3 = 0;
    var mcaVote4 = 0;
    var referundum1 = 0;
    var referundum2 = 0;


    $("button#election").one("click",function(){
        $(".details").hide();
        $(".chooseCounty").show();
        $("button#referendum").attr("disabled",true);
    });
    $("button#referendum").one("click",function(){
        $(".details").hide();
        $(".ref1").show();
        $(".voteRef1").text("Vote");
        $(".ref2").show();
        $(".voteRef2").text("Vote");
        $("button#election").attr("disabled",true);
    });
    $("button#vote-ref1").one("click",function(){
        referundum1+=1;
        $(".voteRef1").text("+1");
        $("button#vote-ref2").attr("disabled",true)
        alert(referundum1);
    })
    $("button#vote-ref2").one("click",function(){
        referundum2+=1;
        $(".voteRef2").text("+1");
        $("button#vote-ref1").attr("disabled",true);
        alert(referundum2);
    })
    $("button#submit-county").click(function(){
        $("#but1").text("Vote");
        $("#but2").text("Vote");
        $("#but3").text("Vote");
        $("#but4").text("Vote");
        $("#but5").text("Vote");
        $("#but6").text("Vote");
        $("#but7").text("Vote");
        $("#but8").text("Vote");
        $("#but9").text("Vote");
        $("#but10").text("Vote");
        $("#but11").text("Vote");
        $("#but12").text("Vote");
        $("#but13").text("Vote");
        $("#but14").text("Vote");
        $("#but15").text("Vote");
        $("#but16").text("Vote");
        $("#but17").text("Vote");
        $("#but18").text("Vote");

        $(".chooseCounty").hide();
        
        if($("#county").val()==="Nairobi"){
            $(".president").show();
            $("#t").show();
            $(".governor1").show();
            $("#t1").show();
            $(".yourLocation1").show();
            $(".mca1").show();
            $("#t7").show();
            $(".btnNairobi").show();
            
        }
        else if ($("#county").val()==="Kiambu"){
            $(".president").show();
            $("#t").show();
            $(".governor2").show();
            $("#t2").show();
            $(".yourLocation").show();
            $(".mca2").show();
            $("#t8").show();
            $(".btnKiambu").show();
            
        }
    });
    $("#submit-location").click(function(){
        if($("#selectLocation").val()==="Ruiru"){
            $(".yourLocation").hide();
            $(".mp1").show();
            $("#t3").show();
        }
        else if($("#selectLocation").val()==="Juja"){
            $(".yourLocation").hide();
            $(".mp2").show();
            $("#t4").show();
        }
    });
    $("#submit-location1").click(function(){
        if($("#selectLocation1").val()==="Westlands"){
            $(".yourLocation1").hide();
            $(".mp3").show();
            $("#t5").show();
        }
        else if($("#selectLocation1").val()==="Ngong"){
            $(".yourLocation1").hide();
            $(".mp4").show();
            $("#t6").show();
        }
    });
    $(".btnNairobi").click(function(){
        if (presidentVote2 > 0){
            $(".president").hide();
            $("#t").hide();
            $(".governor1").hide();
            $("#t1").hide();
            $(".yourLocation1").hide();
            $(".mca1").hide();
            $("#t7").hide();
            $(".btnNairobi").hide();
            $(".textMsg").show();
        }
        else {
            alert("Please vote for atmost one candidate for each position!");
        }
        
    });
    $(".btnKiambu").click(function(){
        if(presidentVote2 > 0){
            $(".president").hide();
            $("#t").hide();
            $(".governor2").hide();
            $("#t2").hide();
            $(".yourLocation").hide();
            $(".mca2").hide();
            $("#t8").hide();
            $(".btnKiambu").hide();
            $(".textMsg").show();
        }
        else {
            alert("Please vote for atmost one candidate for each position!");
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
    $("#Candidate5").one("click",function(){
        governorVote3+=1;
        $("#but5").text("+1");
        $("#Candidate6").attr("disabled",true);
        alert(governorVote3);
    });
    $("#Candidate6").one("click",function(){
        governorVote4+=1;
        $("#but6").text("+1");
        $("#Candidate5").attr("disabled",true);
        alert(governorVote4);
    });
    $("#Candidate7").one("click",function(){
        mpVote1+=1;
        $("#but7").text("+1");
        $("#Candidate8").attr("disabled",true);
        alert(mpVote1);
    });
    $("#Candidate8").one("click",function(){
        mpVote2+=1;
        $("#but8").text("+1");
        $("#Candidate7").attr("disabled",true);
        alert(mpVote2);
    });
    $("#Candidate9").one("click",function(){
        mpVote3+=1;
        $("#but9").text("+1");
        $("#Candidate10").attr("disabled",true);
        alert(mpVote3);
    });
    $("#Candidate10").one("click",function(){
        mpVote4+=1;
        $("#but10").text("+1");
        $("#Candidate9").attr("disabled",true);
        alert(mpVote4);
    });
    $("#Candidate11").one("click",function(){
        mpVote5+=1;
        $("#but11").text("+1");
        $("#Candidate12").attr("disabled",true);
        alert(mpVote5);
    });
    $("#Candidate12").one("click",function(){
        mpVote6+=1;
        $("#but12").text("+1");
        $("#Candidate11").attr("disabled",true);
        alert(mpVote6);
    });
    $("#Candidate13").one("click",function(){
        mpVote7+=1;
        $("#but13").text("+1");
        $("#Candidate14").attr("disabled",true);
        alert(mpVote7);
    });
    $("#Candidate14").one("click",function(){
        mpVote8+=1;
        $("#but14").text("+1");
        $("#Candidate13").attr("disabled",true);
        alert(mpVote8);
    });
    $("#Candidate15").one("click",function(){
        mcaVote1+=1;
        $("#but15").text("+1");
        $("#Candidate16").attr("disabled",true);
        alert(mcaVote1);
    });
    $("#Candidate16").one("click",function(){
        mcaVote2+=1;
        $("#but16").text("+1");
        $("#Candidate15").attr("disabled",true);
        alert(mcaVote2);
    });
    $("#Candidate17").one("click",function(){
        mcaVote3+=1;
        $("#but17").text("+1");
        $("#Candidate16").attr("disabled",true);
        alert(mcaVote3);
    });
    $("#Candidate18").one("click",function(){
        mcaVote4+=1;
        $("#but18").text("+1");
        $("#Candidate17").attr("disabled",true);
        alert(mcaVote4);
    });
    
});