var mouseEvent = "empty";
canvas = 
document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
radius = 2;
line_width = 5;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    line_width = document.getElementById("line_width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUp"
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_mouse_x + " y = " + current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth  = line_width;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius,0, 2*Math.PI);
    ctx.stroke();
}
}