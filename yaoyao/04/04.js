var activeBox= {
	top:0,
	left:0,
	directDeg:0,
	getRotate: function() {
		var temp = "rotate(" + this.directDeg + "deg)";
		return temp;
	},

	changeDirect: function(direct){
		switch(direct){
			case "left":this.directDeg +=270;break;
			case "right": this.directDeg += 90; break;
			case "back": this.directDeg +=180;
		}
		if(this.directDeg >= 360){
			this.directDeg -= 360;
		}
	},

	move: function(direct){
		direct=this.directDeg/90;
		switch(direct){
			case 0:
				if(this.top == 0) return;
				this.top -= 40;
				break;
			case 1:
				if(this.left == 400) return;
				this.left += 40;
				break;
			case 2:
				if(this.top == 400) return;
				this.top += 40;
				break;
			case 3:
				if(this.left == 0) return;
				this.left -= 40; 
		}
	}
};

function drawBox(){
	var boxGraph=document.getElementById("activeBox");
	boxGraph.style.top = box.top+"px";
	boxGraph.style.left = box.left+"px";
	// "rotate(270deg)"
	boxGraph.style.transform = box.getRotate();
}

function identifyCmd(){
	
	var cmd=document.getElementById("cmd").value;
	switch(cmd){
		case "GO":
			box.move();
			drawBox();
			break;
		case "TUN LEF":
			box.changeDirect("left");
			drawBox();
			break;
		case "TUN RIG":
		    box.changeDirect("right");
			drawBox();
			break;
		case "TUN BAC":
			box.changeDirect("back");
			drawBox();
			break;
	}
}




var box=activeBox;
document.getElementById("run").addEventListener("click",identifyCmd);

