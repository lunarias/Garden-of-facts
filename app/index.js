

$(document).ready(function () {
    $(".seed").hide();
    $(".leaf").hide()
    $(".flower-bud").hide()
    seedEvents()

    $(".flower-bud").click(function () {
        console.log("be the flower")
    })
    $(".leaf").click(function () {
        console.log("be the leaf")
    })
})


function seedEvents() {
    $('#seed-spot-1').click(function () {
        var seed = $("#seed-1")
        if (!seed.is(":visible")) {
            seed.fadeIn();
        } else {
            $("#flower-1").css("left", seed.offset().left - 20)
            growPlantAnimation($(".-flower1"))
            $(this).unbind()
        }
    })

    $('#seed-spot-2').click(function () {
        var seed = $("#seed-2")
        if (!seed.is(":visible")) {
            seed.fadeIn();
        } else {
            $("#flower-2").css("left", seed.offset().left - 20)
            growPlantAnimation($(".-flower2"))
            $(this).unbind()
        }
    })

    $('#seed-spot-3').click(function () {
        var seed = $("#seed-3")
        if (!seed.is(":visible")) {
            seed.fadeIn();
        } else {
            $("#flower-3").css("left", seed.offset().left - 20)
            growPlantAnimation($(".-flower3"))
            $(this).unbind()
        }
    })

    $('#seed-spot-4').click(function () {
        var seed = $("#seed-4")
        if (!seed.is(":visible")) {
            seed.fadeIn();
        } else {
            $("#flower-4").css("left", seed.offset().left - 20)
            growPlantAnimation($(".-flower4"))
            $(this).unbind()
        }
    })
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