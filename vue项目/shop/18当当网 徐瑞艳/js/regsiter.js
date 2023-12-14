window.onload = function(){
	//获取节点并检测
	var fom = document.getElementById('fom');
	var inps = fom.getElementsByTagName('input');
	var ti = document.getElementById('ti');    //获取邮箱非弹出窗口
	var ti2 = document.getElementById('ti2');  //获取昵称非弹出窗口
	var ti3 = document.getElementById('ti3');  //获取密码非弹出窗口
	var ti4 = document.getElementById('ti4');  //获取确认密码非弹出窗口
	var btn = document.getElementById('btn');  //获取提交按钮
	//console.log(btn);
	//console.log(ti2);

	//获取焦点，input框架背景色，提示 的span标签内加文字
	inps[0].onfocus = function(){
		inps[0].style.background = "#eefdda";
		ti.innerHTML = "此邮箱是您用于登录当当网账号的邮箱，并用于接收邮件";
		ti.style.color = "#A9A9A9";
		ti.style.backgroundColor = "none";
		ti.style.border = "none";
	}

	//失去焦点 input框改变背景色，提示的span标签内文字内容，背景色，边框，字的颜色变化
	inps[0].onblur = function(){
		var val = inps[0].value;
		if(val.length == ""||val.indexOf(".")==-1||val.indexOf("@")==-1){
			inps[0].style.background = "#fef4d0";
			ti.innerHTML = "电子邮件是必填项，请输入您的Email地址";
			ti.style.background = "#fef4d0";
			ti.style.border = "1px solid #000";
			ti.style.color = "#c8180b";
		}else{
			ti.innerHTML = "<img src = 'images/register_write_ok.gif' />";
			inps[0].style.background = "#fff";
		}	
	}
	
	//获取焦点，input框架背景色，提示的span标签内加文字
	inps[1].onfocus = function(){
		inps[1].style.background = "#eefdda";
		ti2.innerHTML = "昵称可由大小写英文字母、数字组成，长度为4-20个字符";
		ti2.style.color = "#A9A9A9";
		ti2.style.background = "none";
		ti2.style.border = "none";
	}

	//失去焦点 input框改变背景色，提示的span标签内文字内容，背景色，边框，字的颜色变化
	inps[1].onblur = function(){
		var val = inps[1].value;
		if(val.length == ""|| val.length>20||val.length<4){
			inps[1].style.background = "#fef4d0";
			ti2.innerHTML = "昵称为必填项，请输入您的昵称";
			ti2.style.background = "#fef4d0";
			ti2.style.border = "1px solid #000";
			ti2.style.color = "#c8180b";
		}else{
			ti2.innerHTML = "<img src = 'images/register_write_ok.gif' />";
			inps[1].style.backgroundColor = "white";
		}	
	}

	//获取焦点，input框架背景色，提示 的span标签内加文字
	inps[2].onfocus = function(){
		inps[2].style.background = "#eefdda";
		ti3.innerHTML = "密码可由大小写英文字母、数字组成，长度6-20个字符";
		ti3.style.color = "#A9A9A9";
		ti3.style.background = "none";
		ti3.style.border = "none";
	}

	//失去焦点 input框改变背景色，提示的span标签内文字内容，背景色，边框，字的颜色变化
		
	inps[2].onblur = function(){
		var val1 = inps[2].value;
		if(val1.length == ""|| val1.length>20||val1.length<6){
			inps[2].style.background = "#fef4d0";
			ti3.innerHTML = "密码为必填项，请输入您的密码";
			ti3.style.background = "#fef4d0";
			ti3.style.border = "1px solid #000";
			ti3.style.color = "#c8180b";
		}else{
			for(var i=0;i<val1.length;i++){
				var j = val1.substring(i,i+1);//截取每个字符
				if(j>=0){//判断截取的每个字符是否为数字
					ti3.innerHTML = "<img src = 'images/register_write_ok.gif' />";
					inps[2].style.backgroundColor = "white";
				}else{
					inps[2].style.background = "#fef4d0";
					ti3.innerHTML = "密码为必填项，密码只能为数字";
					ti3.style.background = "#fef4d0";
					ti3.style.border = "1px solid #000";
					ti3.style.color = "#c8180b";
				}	
			}
		}
	}
			

	//获取焦点，input框架背景色，提示 的span标签内加文字
	inps[3].onfocus = function(){
		inps[3].style.background = "#eefdda";
		ti4.innerHTML = "密码可由大小写英文字母、数字组成，长度6-20个字符";
		ti4.style.color = "#A9A9A9";
		ti4.style.background = "none";
		ti4.style.border = "none";
	}

	//失去焦点 input框改变背景色，提示的span标签内文字内容，背景色，边框，字的颜色变化
	inps[3].onblur = function(){
		var val2 = inps[3].value;
		if(val2 != inps[2].value||val2.length == ""){
			inps[3].style.background = "#fef4d0";
			ti4.innerHTML = "密码为必填项，请输入您的密码";
			ti4.style.background = "#fef4d0";
			ti4.style.border = "1px solid #000";
			ti4.style.color = "#c8180b";
		}else{
			ti4.innerHTML = "<img src = 'images/register_write_ok.gif' />";
			inps[3].style.backgroundColor = "white";
		}	
	}
	console.log(inps[3].onblur);


	//提交按钮点击事件
	btn.onclick = function(){
		//console.log(fom.getElementsByTagName('img'));
		var fome = fom.getElementsByTagName('img');
		if(fome.length==4){
			atiao();
		}else{
			alert("请你补全信息");
		}
	}
	
	//提交注册跳转登录页面
	function atiao(){
		var btn = document.getElementById("btn");
		if(confirm("注册成功，要跳转登录页面吗？")){
			btn.href = "Login.html";
		}
	}
		
	//二级菜单联动

	//获取节点
	var se1 = document.getElementById("sheng");
	var se2 = document.getElementById("cheng");
	//console.log(se2);
	
	//创建数组 省会
	var city = ["河北省","山西省","内蒙古","辽宁省","吉林省","江苏省"];
	
	//创建数组 城市
	var hui = [
		["石家庄","保定市","秦皇岛","唐山市","邯郸市","邢台市","沧州市","承德市","廊坊市","衡水市","张家口"],
		["太原市","大同市","阳泉市","长治市","临汾市","晋中市","运城市","晋城市","忻州市","朔州市","吕梁市"],
		["呼和浩特","呼伦贝尔","包头市","赤峰市","乌海市","通辽市","鄂尔多斯","乌兰察布","巴彦淖尔"],
		["盘锦市","鞍山市","抚顺市","本溪市","铁岭市","锦州市","丹东市"],
		["吉林市","通化市","白城市","四平市","辽源市","松原市","白山市"],
		["无锡市","常州市","扬州市","徐州市","苏州市","连云港","盐城市","淮安市","宿迁市","镇江市","南通市","泰州市"]
	];
	
	//把省加载到下拉列表中
	var ht1 = "<option>请选择省/城市</option>"; //列表里的初始值
	//用循环,把ctiy数组加载到列表里
	for (var i=0;i<city.length;i++) {
		ht1 = ht1 + "<option>"+city[i]+"</option>";
	}
	//将加载好的列表项发在se1中
	se1.innerHTML = ht1;
	
	//通过改变se1里的内容来确定se2的内容
	se1.onchange = function(){
		//找到省在city里的索引号,存到变量j里
		var j = city.indexOf(this.value);
		
		//将加载好的列表项发在se2中
		if(j == -1){
			se2.innerHTML = "<option>请选择城市/地区</option>";
		}else{
		//把hui数组里对应的索引一致的数组元素放在se2的列表项里
			var ht2 = "";
			for (var i=0;i<hui[j].length;i++) {
				ht2 = ht2 + "<option>"+hui[j][i]+"</option>";
			}
			se2.innerHTML = ht2;
		}
		
	}
	
}