// alert(123);
//六，我的当当二级菜单
var menu1 = document.getElementById("my");//我的当当
// console.log(my);
var menu2 = document.getElementById("down_box");//二级菜单的ul
// console.log(down_box);
var lis = menu2.getElementsByTagName("li");//二级菜单的所有li
var t1;
var t2;
/*//1.封装高增加的函数
function het1(){
	gao = gao +2;
	down_box.style.height = gao+"px";
	if(gao>84){//判断当高小于84时执行高加1的代码
		gao = 84;
		clearInterval(t1);
	}
	down_box.style.border = "1px solid #999999";//当鼠标移入我的当当时给二级菜单加框
	down_box.style.borderTop = "none";
}
//2.当鼠标移入我的当当时，用定时器调用高增加的函数
my.onmouseenter = function(){
		clearInterval(t2);//当鼠标移入我的当当时停止高减小的定时器
		t1 = setInterval(het1,50);//用定时器调用高增加的函数
}
//3.封装高减少的函数
function het2(){
		gao = gao-80;
		down_box.style.height = gao+"px";
		if(gao<=0){
			gao = 0;
			clearInterval(t2);
			down_box.style.border = "1px solid transparent";//当鼠标移出我的当当且高不存在时，二级菜单边框消失
		}
		down_box.style.border = "1px solid #999999";//当鼠标移入我的当当时给二级菜单加框
		down_box.style.borderTop = "none";
}
// 4.当鼠标移出我的当当时,用定时器t2调用高减少的函数
my.onmouseleave = function(){
			clearInterval(t1);//清除高增加的定时器t1
			t2 = setInterval(het2,50);//用定时器t2调用高减少的函数
			
}
*/
var h = 0;
function change(speed){
	h = h+speed;
	//往上加到最大
	if(h>=lis.length*lis[0].offsetHeight){
		h=lis.length*lis[0].offsetHeight;
		clearInterval(t1);
		}else if(h<=0){
			h = 0;
			clearInterval(t2);
			menu2.style.border = "1px solid transparent";
		}
	menu2.style.height = h +"px";
}
menu1.onmouseenter = function(){
	clearInterval(t2);
	t1 = setInterval(change,30,10);
	menu2.style.border = "1px solid #ccc";
}
menu1.onmouseleave = function(){
	clearInterval(t1);
	t2 = setInterval(change,30,-10);
}