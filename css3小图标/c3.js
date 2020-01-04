$(".libox").hover(function () {
    $(".boxt").addClass("boxssss")
})
$(".libox").mouseleave(function () {
    $(".boxt").removeClass("boxssss")
})
// qq
$(".qqii").hover(function () {
    $(".qq1").addClass("loaderi")
    $(".qq2").addClass("loaderi")
    $(".qq3").addClass("loaderi")
    $(".qq4").addClass("loaderi")
    $(".qq5").addClass("loaderi")
})
$(".qqii").mouseleave(function () {
    $(".qq1").removeClass("loaderi")
    $(".qq2").removeClass("loaderi")
    $(".qq3").removeClass("loaderi")
    $(".qq4").removeClass("loaderi")
    $(".qq5").removeClass("loaderi")
})
// yy
$(".yly").hover(function () {
    $(".yy1").addClass("yy11")
    $(".yy2").addClass("yy22")
    $(".yy3").addClass("yy33")
    $(".yy4").addClass("yy44")
    $(".yy5").addClass("yy55")
})
$(".yly").mouseleave(function () {
    $(".yy1").removeClass("yy11")
    $(".yy2").removeClass("yy22")
    $(".yy3").removeClass("yy33")
    $(".yy4").removeClass("yy44")
    $(".yy5").removeClass("yy55")
})
// boz
// 翻转圆圈
$(".ylan").hover(function () {
    $(".circlefl").addClass("circlefl1")
    $(".circlefr").addClass("circlefr1")
    $(".circlezj").addClass("circlezj1")
    $(".circlepb").addClass("circlepb1")
})
$(".ylan").mouseleave(function () {
    $(".circlefl").removeClass("circlefl1")
    $(".circlefr").removeClass("circlefr1")
    $(".circlezj").removeClass("circlezj1")
    $(".circlepb").removeClass("circlepb1")
})

// 翻转圆圈
// 旋转圆圈
$(".yqyq").hover(function () {
    $(".rotatefl").addClass("rotatefldh")
    $(".rotatezj").addClass("rotatezjdh")
    $(".rotatefr").addClass("rotatefrdh")
})
$(".yqyq").mouseleave(function () {
    $(".rotatefl").removeClass("rotatefldh")
    $(".rotatezj").removeClass("rotatezjdh")
    $(".rotatefr").removeClass("rotatefrdh")
})
// 旋转圆圈
// 旋转时钟
$(".szsz").hover(function () {
    $(".clockfl").addClass("clockfld")
    $(".clockfr").addClass("clockfrd")
})
$(".szsz").mouseleave(function () {
    $(".clockfl").removeClass("clockfld")
    $(".clockfr").removeClass("clockfrd")
})
// 旋转时钟
// 加载方块
$(".fkfk").hover(function () {
    $(".diamond ul li").addClass("lifk")
})
$(".fkfk").mouseleave(function () {
    $(".diamond ul li").removeClass("lifk")
})
// 加载方块
// 加载旋转方块
$(".taop").hover(function () {
    $(".rotatediamond ul li").eq(0).addClass("li111")
    $(".rotatediamond ul li").eq(1).addClass("li222")
    $(".rotatediamond ul li").eq(2).addClass("li333")
    $(".rotatediamond ul li").eq(3).addClass("li444")
})
$(".taop").mouseleave(function () {
    $(".rotatediamond ul li").eq(0).removeClass("li111")
    $(".rotatediamond ul li").eq(1).removeClass("li222")
    $(".rotatediamond ul li").eq(2).removeClass("li333")
    $(".rotatediamond ul li").eq(3).removeClass("li444")
})
// 加载旋转方块