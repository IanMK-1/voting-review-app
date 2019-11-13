
$( document).ready(function(){
    $(".can").click(function(event){
    $(".candidates option:selected").show("#mp");
        let candidate = $(".candidates option:selected").val();
    });
});
$(document).ready(function(){

    // $(".candidates").change(function(){
    //     // if ($(this).val() =="#president") {
    //     //     window.location = "#"+ this.val();
    //     // }
    //     console.log("b");
    // }
    $(".candidates").change(function(){
        if ($(this).val() === "president" || "governor" || "mp" || "mca"  ) {
             window.location = "#"+ $(this).val();
            console.log($(this).val());
             }

    })
})