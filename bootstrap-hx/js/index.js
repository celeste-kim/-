$(function(){

	//为栏目绑定事件
	$("ul.left_nav").on("click","li",function(){
		$("ul.left_nav>li").removeClass("current");
		$(this).addClass("current");
		var url = $(this).attr("url");
		$(".content").load(url);
	})
	//默认选中第一个li
	$("ul.left_nav>li:first-child").trigger("click");
})