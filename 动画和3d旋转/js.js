var wsm = 0
$(".roundness").click(function () {
    wsm++
    if (wsm == 1) {
        $(".roundnesssvg").addClass("xzhuan")
        $(".fl").addClass("xx")
        $(".jz").addClass("yy")
        $(".fr").addClass("hh")
    } else {
        $(".roundnesssvg").removeClass("xzhuan")
        $(".fl").removeClass("xx")
        $(".jz").removeClass("yy")
        $(".fr").removeClass("hh")
    }
    if (wsm >= 2) {
        wsm = 0
    }
    // console.log(wsm);
})
// 1
// 加载按钮
var x = 0
$(".backbth").click(function () {
    x++
    $(".wire").css("opacity", 1)
    $(".car").css("opacity", 1)
    $(".car").addClass("fad")
    $(".wire").addClass("kas")
    $("p").css("opacity", 0)
    
    $(function () {
        setInterval(showTime, 6700);
        function showTime() {
            var today = new Date();
          $(".pfr").addClass("pfrfd").css("opacity", 1)
        }
    })
})
