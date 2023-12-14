window.onload = function(){
	
	//轮播图效果
	var banner = document.getElementById('banner');
	var imgs = banner.getElementsByTagName('img');
	var xulie = document.getElementById('xulie');
	var lis = xulie.getElementsByTagName('li');
	//console.log(banner);
	var index = 0;
	function move(){
		index++;
		if(index == imgs.length){
			index = 0;
		}
		count();
	}
	var t = setInterval(move,1000);
	
	banner.onmouseover = function(){
		clearInterval(t);
	}
	
	banner.onmouseout = function(){
		t = setInterval(move,1000);
	}
	
	for(var i=0;i<lis.length;i++){
		lis[i].suoYin = i;
		lis[i].onmouseover = function(){
			index = this.suoYin;
			count();
		}
	}
	
	function count(){
		for(var i=0;i<imgs.length;i++){
				imgs[i].style.display = "none";
				lis[i].style.background = "#fff";
			}
		imgs[index].style.display = "block";
		lis[index].style.background = "orange";	
	}
	

	//弹出广告窗口
	function window_open(){
		window.open("tianchu.html","_blank","width=510,height=360,left=188,top=100");
	}
	window_open();

	//右侧固定广告
	var gg = document.getElementById("GG");
	var close = document.getElementById("close");
	//console.log(close);
	close.onclick = function(){
		close.parentNode.style.display = "none";
	}

	
	//最新上架图书效果
	var fu = document.getElementById("thing_list_center_center");
	//console.log(fu);//获取父级节点并检测
	var but = fu.getElementsByTagName("div")[0].getElementsByTagName("button");
	var uls = fu.getElementsByTagName("ul");
	//console.log(but[0].parentNode.parentNode.getElementsByTagName("ul")[0]);
	for(var i=0;i<but.length;i++){
		//but[i].suoYin = i;
		but[i].onclick = onc;
			/*if(but[this.suoYin]==this){
				but[this.suoYin].className = "pp_4";
			}else{
				but[this.suoYin].className = "pp_2";
			}*/
	}
	function onc(){
		for(var i=0;i<but.length;i++){
			if(but[i]==this){
				but[i].className = "pp_4";
				uls[i].className = "tushu1";
			}else{
				but[i].className = "pp_2";
				uls[i].className = "tushu";
			}
		}
	}
	 
	
	
	//书讯快递的滚动
	//获取节点
	var list =  document.getElementById("zi");
	//console.log(list);
	var liss = list.getElementsByTagName("li");
	//console.log(liss);
	var lie = document.getElementById("inDiv");
	//获取li的长度
	var len = liss.length; 
	//将list里的li复制一遍，然后添加到list的末尾
	for (var i = 0; i < len; i++) {
		var fu = liss[i].cloneNode(true);
		list.appendChild(fu);
	}

	//每隔一段时间就让list节点往上移动一点
	var marTop = 0;  //放list的上外边距
	function move1(){
		//每次减少list的上外边距
		marTop--;
		if(marTop < -250){
			marTop = 0;
			list.style.marginTop = "0px";
		}
		list.style.marginTop = marTop + "px";
	}
	//	开启一个定时器
	var tt = setInterval(move1,20);
	lie.onmouseover = function(){
		clearInterval(tt);
	}
	lie.onmouseout = function(){
		tt = setInterval(move1,20);
	}

	//二级菜单
	var fu1 = document.getElementById("top_right_li3");
	var erji = document.getElementById("erji");
	/*var lis = erji.getElementsByTagName("li");*/
	//console.log(fu);
	var h = 0;
	var t1;
	var t2;
	function change(speed){
		h = h + speed;
		if(h>=erji.scrollHeight){
			h = erji.scrollHeight;
			clearInterval(t1);
		}else if(h<=0){
			h = 0;
			clearInterval(t2);
			erji.style.border = "1px solid transparent"
		}
		erji.style.height = h+"px";
	}
	
	fu1.onmouseenter = function(){
		clearInterval(t2);
		t1 = setInterval(change,30,10);
		erji.style.border = "1px solid #ccc";
	}
	fu1.onmouseleave = function(){
		clearInterval(t1);
		t2 = setInterval(change,30,-10);
	}

}