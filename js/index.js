$(function(){
	$("img").one('load', function() {
  		var imgwidth = $(this).width();
		var imgheight = $(this).height();
		console.log(imgwidth+";"+imgheight);			
		if(imgheight<imgwidth){
			$(this).css("width","100%");
			var heightdt = $(this).parent("dt").height();
			var margint = (heightdt - $(this).height())/2;
			$(this).css("margin-top",margint);
		}else{
			$(this).css("height","100%");
		}
	}).each(function() {
	   if(this.complete) $(this).load();
	});
	$("section dl").click(function(){
		window.location.href = "dingzhi.html"
	})
})
