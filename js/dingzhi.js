$(function(){
	var change;
	var a=0;
	var b=0;
	var c=0;
	$.ajax({
		type:"get",
		url:"js/dingzhi.json",
		async:true,
		success:function(data){
			console.log(data.content)
			change = data.content;
			changebox(0,0);
			webgl(a,b,c);
		},
		error:function(){
			alert("网络加载失败")
		}
	});
	$(".Customized").click(function(){//订制按钮
		$(".cancel").stop().animate({"margin-left":"-1.47rem"});
		$(".confirm").stop().animate({"margin-left":"0.89rem"});
		$(".Customized").stop().animate({"opacity":"0"});
		$(".bottom .change").stop().animate({"opacity":"1"});
	});
	$(".change .first").delegate("span","click",function(){
		a = $(this).index();
		b = 0;
		c = 0;
		changebox(a,b)
		gochange(a,b,c)
		webgl(a,b,c)
	})
	$(".change .second").delegate("span","click",function(){
		b = $(this).index();
		a = $(".change .first p .active").index();
		c = 0;
		changebox(a,b)
		gochange(a,b,c)
		webgl(a,b,c)
	})
	$(".change .third").delegate("span","click",function(){
		c = $(this).index();
		b = $(".change .second p .active").index();
		a = $(".change .first p .active").index();
		gochange(a,b,c)
		webgl(a,b,c)
	})
	function webgl(a,b,c){
//		alert($(".first span").eq(a).text()+":"+b+":"+c)
	}
	function suanwidth(obj1,obj2){//计算宽度
		var swidth = 0;//计算width
		for(var i = 0;i<obj1.length;i++){
			swidth+=obj1.eq(i).outerWidth(true);
			
		}
		console.log(swidth)
		obj2.width(swidth);
	}
	function gochange(a,b,c){//选择样式
		$(".change span").removeClass("active");
		$(".change .first p span").eq(a).addClass("active");
		$(".change .second p span").eq(b).addClass("active");
		$(".change .third p span").eq(c).addClass("active");
		
	}
	function changebox(a,b){//选择框
		if(a ==-1){
			a=0
		}
		if(b ==-1){
			b=0
		}
		if(c==-1){
			c=0
		}
		var str1 ='';
		for(var i = 0;i<change.length;i++){
			str1+="<span id="+change[i].first_id+">"+change[i].first_value+"</span>"
		}
		$(".change .first p").html(str1);
		if(change[a].first_arr!=""){
			var str2 ='';
			for(var i = 0;i<change[a].first_arr.length;i++){
				str2+="<span id="+change[a].first_arr[i].second_id+">"+change[a].first_arr[i].second_value+"</span>"
			}
			$(".change .second p").html(str2);
			if(change[a].first_arr[b].second_arr == ""){
				$(".change .second p").html("");
				$(".change .third p").html(str2);
			}else{
				var str3 ='';
				for(var i = 0;i<change[a].first_arr[b].second_arr.length;i++){
					str3+="<span id="+change[a].first_arr[b].second_arr[i].third_id+">"+change[a].first_arr[b].second_arr[i].third_value+"</span>"
				}
				$(".change .third p").html(str3);
			}
		}else{
			$(".change .second p").html("");
			$(".change .third p").html("");
		}
		gochange(a,b,0);
		suanwidth($(".change .first p span"),$(".change .first p"));
		suanwidth($(".change .second p span"),$(".change .second p"));
		suanwidth($(".change .third p span"),$(".change .third p"));
	}
})


