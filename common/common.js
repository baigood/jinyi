$("header ul li").eq(0).click(function(){
	if($(".loginbox").length>0){
		$(".loginbox").remove();
	}else{
		$("body").append("<div class='loginbox'></div>");
	}
})
$("header ul li").eq(1).click(function(){
	window.location.href = "index.html"
})
$("header ul li").eq(2).click(function(){
	window.location.href = "collect.html"
})
$("header ul li").eq(3).click(function(){
	window.location.href = "ShoppingCart.html"
})

