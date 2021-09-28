

$(document).ready(function () {
  $(".seed").hide();

  $('#seed-spot-1').click(function(){
    $("#seed-1").fadeIn();
  })

  $('#seed-spot-2').click(function(){
    $("#seed-2").fadeIn();
  })

  $('#seed-spot-3').click(function(){
    $("#seed-3").fadeIn();
  })

  $('#seed-spot-4').click(function(){
    $("#seed-4").fadeIn();
  })

    console.log('hello')
    $(".leaf").hide()
    $(".flower-bud").hide()

    $("#grow-btn-1").click(function () {
        growPlantAnimation($(".-flower1"))
        $(this).unbind()
    })
    $("#grow-btn-2").click(function () {
        growPlantAnimation($(".-flower2"))
        $(this).unbind()
    })
    $("#grow-btn-3").click(function () {
        growPlantAnimation($(".-flower3"))
        $(this).unbind()
    })
    $("#grow-btn-4").click(function () {
        growPlantAnimation($(".-flower4"))
        $(this).unbind()
    })
 
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