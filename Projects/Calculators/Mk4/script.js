var num1 =""
var num2 =""   
document.getElementById("myH2").style.color = "#FFFFFF"; //Changes the color of correlated h and p on the top of the page
document.getElementById("test").style.color = "#FFFFFF";

function noth()  //Resets the Calculator
{
    num1 = ""
    num2 = ""
    var x = document.getElementsByClassName("current-operand");
    var y = document.getElementsByClassName("previous-operand");
    x[0].innerHTML = num1;
    y[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////

function equal() //Takes the equation string and 'evaluates' it then prints the equation on top and answer on bottom for future use
{
    num2 = eval(num1)
    if (num2 == Infinity)
    {
        alert('CANNOT DIVIDE BY ZERO')
        noth()
        return
    }
    else
        {
    num1 = num1 + "="
    var x = document.getElementsByClassName("previous-operand"); //upper part getting the elements
    var y = document.getElementsByClassName("current-operand");  //Lower Part
    x[0].innerHTML = num1;
    y[0].innerHTML = num2;
    num1 = num2 //changes the ans into the new string
    }
}

////////////////////////////////////////////////////////////////////////////////

function DEL() //Shaves off the last char of the string, which simulates a del thanks to the eval
{
    num1 = num1.slice(0, -1) 
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////

function insert(buttval)
{
    
    num1 = num1 + buttval
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;

}

////////////////////////////////////////////////////////////////////////////////

function square()
{
    num1 = num1 + '**'
    var x = document.getElementsByClassName("current-operand");
    x[0].innerHTML = num1;
}

////////////////////////////////////////////////////////////////////////////////