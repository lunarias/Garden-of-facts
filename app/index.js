

$(document).ready(function () {
    // $(".seed").hide();
    // $(".leaf").hide();
    // $(".flower-bud").hide();
    $("#modal-close").click(function(){
        $("#modal").modal("hide");
    })
    
    seedEvents();
    addPlantPopups("#flower-1", "Hardeep");
    addPlantPopups("#flower-2", "Jessie");
    addPlantPopups("#flower-3", "Kim");
    addPlantPopups("#flower-4", "Shaina");   
    

    $(".flower-bud").click(function () {
        console.log("be the flower")
    })
})


function addPlantPopups(flowerID, name){

    //Load all leaf popups
    for (let i=1; i < 5; i++){
        $(flowerID + " #fact-" + i).click(function(){
            $(".modal-body").load("./facts/" + name + "/fact"+ i + ".html",function(){
                var title = $("#fact-header").text();    
                $(".modal-header #modal-title").text(title);
                $("#modal").modal("show");
            });
        })
    }

    //Final flower bud popup
    $(flowerID + " .flower-bud").click(function(){
        $(".modal-body").load("./facts/" + name + "/fact5.html",function(){
            var title = $("#fact-header").text();    
            $(".modal-header #modal-title").text(title);
            $("#modal").modal("show");
        });
    })

}

function seedEvents() {

    //Generate all seed click events
    for (let i=1; i < 5; i++){
        $("#seed-spot-"+i).click(function () {        
            var seed = $("#seed-"+i)
            if (!seed.is(":visible")) {
                seed.fadeIn();
            } else {
                $("#flower-"+i).css("left", seed.offset().left - 20)
                growPlantAnimation($(".-flower"+i))
                $(this).unbind()
            }
        })

    } 
}
 
function growPlantAnimation(flowerContainer) {
    flowerContainer.find(".plant")
    flowerContainer.find(".plant").addClass("grow-stem")
    setTimeout(function () {
        flowerContainer.find(".leaf").fadeOut();
        flowerContainer.find(".flower-bud").fadeOut();
        flowerContainer.find(".leaf").each(function (index) {
            var self = this
            setTimeout(function () {
                $(self).fadeIn(1000);
            }, index * 100)
        })
        flowerContainer.find(".flower-bud").fadeIn(2000);
    }, 2000)
}