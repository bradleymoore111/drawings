function draw() {
	var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');

    // Making the graph
    var height = canvas.height;
    var width  = canvas.width;
    ctx.strokeStyle = "rgb(0,0,0)"
    ctx.beginPath();
    ctx.moveTo(0,height/2);
    ctx.lineTo(width,height/2);
    ctx.moveTo(width/2,0);
    ctx.lineTo(width/2,height);
    ctx.stroke();

    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle = "rgb(200,0,200)"
    ctx.moveTo(0,gOfX(-1*width/2));
    for(i=0;i<width;i++){
    	var x = xToGraph(i)
    	var y = gOfX(x);
    	x = xToWindow(x);
    	y = yToWindow(y);
    	ctx.lineTo(x,y)
    }
    ctx.stroke();
}
function gOfX(x){
	return 30*Math.sin(x/30);
}
function xToWindow(x){
	var width = canvas.width;
	return (width/2 + x);
}
function yToWindow(y){
	var height= canvas.height;
	return (height/2+ y);
}
function xToGraph(x){
	var width = canvas.width;
	return (x - width/2);
}
function yToGraph(y){
	var height= canvas.height;
	return (y - height/2);
}