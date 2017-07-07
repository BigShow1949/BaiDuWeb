function query(){
	var target=document.getElementById("inputValue").value;
	var length=0;
	// 计算输入的字符长度
	for (var i = target.length - 1; i >= 0; i--) {
		// charCodeAt返回指定位置的字符Unicode编码 0~65535之间
		// 0~255是常规字符占用一个字节,非常规字符如中文、日文。这些字符一个占用2个字节
		if (target[i].charCodeAt()>0 && target[i].charCodeAt()<255) {
			length++;
		}else{
			length+=2;
		}
	};
	return length;
}

function result(){
	var result = query();
	var p = document.getElementById("text");
	var inputValue = document.getElementById("inputValue");
	if(result >= 14 || result <= 4){
		p.innerHTML = "长度必须大于4且小于14";
		p.style.color = "red";
		inputValue.style.border = "1px solid red";
		return false;
	}else{
		p.innerHTML = "通过！";
		p.style.color = "green";
		inputValue.style.border = "1px solid green";
		return true;
	}

}

function showTextFocus(){
	var text = document.getElementById("text");
	text.innerHTML = "长度大于4小于14，中文算两个字符";
	text.style.color = "#eee";
}

function submit(){
	if(result()){
		alert("成功！");
	}else{
		alert("失败");
	}
}

var searchBox=document.getElementById("inputValue");
searchBox.addEventListener("focus",showTextFocus);
searchBox.addEventListener("blur",result);
document.getElementById("searchBtn").addEventListener("click",submit);

