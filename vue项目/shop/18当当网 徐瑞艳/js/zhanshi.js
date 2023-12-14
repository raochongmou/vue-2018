// console.log(123);
// 给大图列表加点击事件
// 获取节点
var daniu = document.getElementById("daniu");
var lieniu = document.getElementById("lieniu");
var liebiao = document.getElementById("liebiao");
var datu = document.getElementById("datu");
console.log(datu);
// 给大图按钮添加点击事件
daniu.onclick = function(){
	liebiao.style.display = "none";
	datu.style.display = "block";
	daniu.style.background = "#FF9966";
	lieniu.style.background = "#F9D8A9";
}
// 给列表按钮添加点击事件
lieniu.onclick = function(){
	liebiao.style.display = "block";
	datu.style.display = "none";
	lieniu.style.background = "#FF9966";
	daniu.style.background = "#F9D8A9";
}

// 左边点击列表收起来
// 获取节点
var liu = document.getElementById("liu");
var list = document.getElementById("list");
console.log(liu);
// 给浏览同级...添加点击事件
liu.onclick = function(){
	if(list.style.height == "15px"){
		list.style.height = "590px";
	}else{
		list.style.height = "15px";
	}
}
