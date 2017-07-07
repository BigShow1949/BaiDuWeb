function query(){
	// alert("asdf");
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

	var result = document.getElementById("result");
	if(length >= 14 || length <= 4){
		result.innerHTML = "长度必须大于4且小于14";
		result.style.color = "red";
	}else{
		result.innerHTML = "通过！";
		result.style.color = "green";
	}

	return false;
}

// document.getElementById("searchBtn").addEventListener("click",query);
document.getElementById("searchBtn").addEventListener("click",query);