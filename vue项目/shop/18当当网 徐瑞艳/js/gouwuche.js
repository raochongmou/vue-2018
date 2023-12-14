// console.log(123);
// 一，我的购物车点击按钮挑选的商品被收起
var thing_top2 = document.getElementById("thing_top2");
console.log(thing_top2);
var thing = document.getElementById("thing");
console.log(thing);
thing_top2.onclick = function(){
			if(thing.style.display == "none"){
				thing.style.display = "block";//隐藏时点击显示
				thing_top2.style.background = "url(../img/shopping_arrow_up.gif) no-repeat 0px 0px";
			}else{
				thing.style.display = "none";//显示时点击隐藏
				thing_top2.style.background = "url(../img/shopping_arrow_down.gif) no-repeat 0px 0px";
			}	
}

// 二，删除选购的商品
// 获取节点
var pos_ul2 = document.getElementById("pos_ul2");//获取整个ul的节点
var pos_lis = pos_ul2.getElementsByTagName("li");//需要删除li的节点
var pos_li5 = pos_ul2.getElementsByClassName("li5");//所有删除的节点
var qing = document.getElementById("qing");//清空购物车后向页面输出没挑选商品的框
function shanchu(){
	for(var i = 0;i<pos_li5.length;i++){
	pos_li5[i].onclick = function(){
		if(confirm("确定要删除吗")){
			var par = this.parentNode;//当前点击事件的父级
			var pars = par.parentNode;//当前点击事件的父级的父级
			pars.parentNode.removeChild(pars);//通过删除的li的父级删除li
			se();
		}	
		if (pos_li5.length == 0) {//当删除的项目总长度等于零时向页面写入清空购物车的效果
			qing.style.height = "345px";
			qing.innerHTML = "您还没有挑选商品，<a href='zhanshi.html'>去挑选看看>></a>";
			qing.style.lineHeight = "345px";
			qing.style.paddingLeft = "350px";
			qing.style.fontSize = "20px";
			qing.style.background = "#ccc";
		}else{
			jia();//当删除的项目总长度大于零时调用所有价格相加的函数
			// se();
		}
		}

	}
}
shanchu();

// 三，清空购物车
// 获取节点
var kong = document.getElementById("kong");//
console.log(kong);

// 给清空购物车添加点击事件
kong.onclick = function(){//清空购物车的效果
	qing.style.height = "345px";
	qing.innerHTML = "您还没有挑选商品，<a href='zhanshi.html'>去挑选看看>></a>";
	qing.style.lineHeight = "345px";
	qing.style.paddingLeft = "350px";
	qing.style.fontSize = "20px";
	qing.style.background = "#ccc";
}

//根据书本数量计算总共的积分，节省金额，总价
var pos_sp = pos_ul2.getElementsByClassName("dan");//获取所有的需要计算的单价

var zongji = document.getElementById("zongji");//总价的span

var pos_li1 = pos_ul2.getElementsByClassName("li1"); //所有单个书本的积分

var jifen = document.getElementById("jifen");//积分的span

var yuan = pos_ul2.getElementsByClassName("yuan");//所有单个商品的原价

var jiesheng = document.getElementById("jiesheng");//节省的span

var inpB = pos_ul2.getElementsByTagName("input");//输入的本数的input框


//根据书本数量计算总共的积分，节省金额，总价
function jia(){//封装函数
	
	var zong = 0;//总价的初始值

	var ji = 0;//积分的初始值

	var jie = 0;//节省金额的初始值

	for(var j = 0; j<pos_sp.length;j++){//for循环，j索引值

			zong = Number(zong) +Number(pos_sp[j].innerHTML)*parseInt(inpB[j].value);//每个单价相加的值
			zong = zong.toFixed(2);//保留两位小数

			ji = Number(ji) +Number(pos_li1[j].innerHTML)*parseInt(inpB[j].value);//每个积分相加的值
			ji = ji.toFixed(2);//保留两位小数


			jie = Number(jie) +(Number(yuan[j].innerHTML)-Number(pos_sp[j].innerHTML))*parseInt(inpB[j].value);//总共节省的钱
			jie = jie.toFixed(2);//保留两位小数
	}	
		zongji.innerHTML = zong;//向总价的span内输入计算出来的总价
		jifen.innerHTML = ji;//向积分的span内输入计算出来的总价
		jiesheng.innerHTML = jie;//向节省金额的span内输入计算出来的总价
		return(zongji);//返回需要用到的总结的数字
}
jia();//当页面打开时调用总价函数


//点击加减按钮让数量加或减
//封装一个加减函数
function jiajian(){
	var jiaf = document.getElementsByName("jia");
	var jian = document.getElementsByName("jian");
	var inp = document.getElementsByName("shu");
	//console.log(inp);
	for(var i=0;i<jian.length;i++){
		jiaf[i].suoYin=i;
		jiaf[i].onclick = function(){
			inp[this.suoYin].value++;
			jia();
		}
		jian[i].suoYin=i;
		jian[i].onclick = function(){
			if(inp[this.suoYin].value > 1){
				inp[this.suoYin].value--;
				jia();
			}else{
				alert("至少数量为1");
			}	
		}
		
	}
	
}
jiajian();

// 五，隔行变色
function se(){
	for(var q = 0 ;q<pos_lis.length;q++){
		if(q%2 == 1){
			pos_lis[q].style.background = "#FFDBAD";
			}else if(q%2 == 0){
				pos_lis[q].style.background = "#FFFFFF";
			}
}
}
se();//当页面打开时调用变色函数	

//六：购买
// 左边获取节点
var goumai1 = document.getElementById("goumai1");//购买里面左边的ul
var gm_lis1 = goumai1.getElementsByClassName("li3");//购买两个字的集合

// 右边获取节点
var goumai2 = document.getElementById("goumai2");//购买里面左边的ul
var gm_lis2 = goumai2.getElementsByClassName("li3");//购买两个字的集合



function gou(gm_lis){//封装购买时，购物车内添加节点的函数，

	var inde1 = 0;//存储索引号的变量

	var xin1 = 0;//存储节点的变量

	// 给购买加点击事件，给下面添加节点
	for(var i = gm_lis.length-1;i >= 0;i--){
		gm_lis[i].suoyin = i;
		gm_lis[i].onclick = function(){
			inde1 = this.suoyin;

			// pos_ul2.appendChild(gm_shu1[inde]);//添加的节点加下去了，原节点消失

			// 取出购买里面的文本
			var my_xian = gm_lis[inde1].previousElementSibling.firstElementChild.innerHTML;//现价
			var my_yuan = gm_lis[inde1].previousElementSibling.previousElementSibling.firstElementChild.innerHTML;//原价
			var my_ming = gm_lis[inde1].parentNode.previousElementSibling.innerHTML;//书名
			//console.log(my_ming);

			//在下面购物车部分添加
			//创建一个li元素并添加到末尾

			// 判断点击购买时 数量的多少，点击一次在下面加一行，多次时从第二次开始input框内的数量往上加
			var books = pos_ul2.getElementsByTagName("p");//ul里面的p标签
			var tong = false; //存一个标记变量
			for (var j=0;j<books.length;j++) {
				var nei = books[j].firstElementChild.innerHTML;  //获取所有商品名
				//console.log(nei);
				if(my_ming == nei){
					tong = true;
					break;
				}	
			}
			if(tong){
				var inp = document.getElementsByName("shu");
				inp[j].value = Number(inp[j].value)+1;
			}
			else{
					xin1 = document.createElement('li');
					xin1.innerHTML = "<p><a>"+my_ming+"</a></p><div class='pos_ul3'><div class='li1'>33</div><div class='li2'>￥<span class='yuan'>"+my_yuan+"</span></div><div class='li3'>￥<span class='dan'>"+my_xian+"</span>(78折)</div><div class='li6'><button name='jian' class='jian'>-</button>&nbsp;<input type='text' name='shu' class='shu' value='1'/><button name='jia' class='jia'>+</button>&nbsp</div><div class='li5'><a href=''>删除</a></div><div class='clear'></div>";
		
					pos_ul2.appendChild(xin1);
		
					se();
					shanchu();
					jia();
					jiajian();
			}
		}
	}
}

gou(gm_lis1);//给购买左边的书籍添加函数
gou(gm_lis2);

