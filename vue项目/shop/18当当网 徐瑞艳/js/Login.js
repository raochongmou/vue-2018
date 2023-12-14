console.log(1);
//获取并检测节点
var btn = document.getElementById('btn');
var fom = document.getElementById('fom');
var inps = fom.getElementsByTagName('input');
var gou = document.getElementsByName("gou");
//		console.log(inps);

inps[0].onblur = function(){
	var val = inps[0].value;
	//验证邮箱
	if(val.length == " "){
		alert("邮箱不能为空！");
	}else if(val.indexOf(".")==-1||val.indexOf("@")==-1){
		alert("邮箱格式不正确,要有.跟@");
	}else{
		gou[0].innerHTML = "<img src = 'images/register_write_ok.gif' />"
	}
}
inps[1].onblur = function(){
	var vals = inps[1].value;
	//验证密码
	if(vals.length<6||vals.length == ""){
		alert("密码不能小于6位数并且不能为空")
	}else{
		gou[1].innerHTML = "<img src = 'images/register_write_ok.gif' />"
	}
}

//提交按钮点击事件
btn.onclick = function(){
	//console.log(fom.getElementsByTagName('img'));
	var fome = fom.getElementsByTagName('img');
	if(fome.length==2){
		atiao();
	}else{
		alert("请你补全信息");
	}
}
	
//提交页面跳转主页面
function atiao(){
	if(confirm("登录成功，要跳转主页面吗？")){
		location.href = "index.html";
	}
}