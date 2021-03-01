var num1 =""
var num2 =""   
document.getElementById("myH2").style.color = "#FFFFFF";
document.getElementById("warn").style.color = "#FFFFFF";

////////////////////////////////////////////////////////////////////////////////

function onec() 
{
    num1 = num1 + "1"
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;

    
}

////////////////////////////////////////////////////////////////////////////////

function twoc() 
{
    num1 = num1 + "2"
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////

function threec() 
{
    num1 = num1 + "3"
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////

function fourc() 
{
    num1 = num1 + "4"
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////
function fivec() 
{
    num1 = num1 + "5"
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////
function sixc() 
{
    num1 = num1 + "6"
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////
function sevenc() 
{
    num1 = num1 + "7"
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////
function eightc() 
{
    num1 = num1 + "8"
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////
function ninec() 
{
    num1 = num1 + "9"
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////
function zeroc() 
{
    num1 = num1 + "0"
    for (var i = 0; i < num1.length; i++)
    {
        if (num1.charAt(i) == "/")
        {
            alert("ERROR ERROR")
            return
        }

            var x = document.getElementsByClassName("current-operand");
            x[0].innerHTML = num1;
            
    }


    
    
}

////////////////////////////////////////////////////////////////////////////////

function add() 
{
    num1 = num1 + " + "
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////

function mul() 
{
    num1 = num1 + " * "
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////

function div() 
{
    num1 = num1 + " / "
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////

function sub() 
{
    num1 = num1 + " - "
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////

function square()  //Needs optimized
{
    num1 = Math.pow(eval(num1), 2)
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////

function dotc() 
{
    num1 = num1 + "."
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////

function noth() 
{
    num1 = ""
    num2 = ""
    var x = document.getElementsByClassName("current-operand");
    var y = document.getElementsByClassName("previous-operand");
    x[0].innerHTML = num1;
    y[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////

function equal() 
{
    num2 = eval(num1)
    num1 = num1 + "="
    var x = document.getElementsByClassName("previous-operand");
    var y = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
    y[0].innerHTML = num2;
    num1 = num2
}

////////////////////////////////////////////////////////////////////////////////

function DEL() 
{
    
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////





/*

To be implemented later

<button onclick="noth()">C</button>
<button onclick="square()">^2</button>

*/