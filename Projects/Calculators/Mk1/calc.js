// AC, x^, button styling and ans continuation not implemeted yet


num1 = 0
num2 = 0

testiftwo = 0
addition = 0
subtraction = 0
multiplication = 0
division = 0

ans = 0


function onec()
{
    if (testiftwo == 0)
    {
        num1 = (num1*10)+1
        console.log(num1)
        document.getElementById("Calc Output").innerHTML = num1
    }
    else
    {
        num2 = (num2*10)+1
        console.log(num2)
        document.getElementById("Calc Output").innerHTML = num2 
    }
}

function twoc()
{
    {
        if (testiftwo == 0)
        {
            num1 = (num1*10) + 2
            console.log(num1)
            document.getElementById("Calc Output").innerHTML = num1
        }
        else
        {
            num2 = (num2*10) + 2    
            console.log(num2)
            document.getElementById("Calc Output").innerHTML = num2 
        }
    }
}

function threec()
{
    {
        if (testiftwo == 0)
        {
            num1 = (num1*10) + 3
            console.log(num1)
            document.getElementById("Calc Output").innerHTML = num1
        }
        else
        {
            num2 = (num2*10) + 3
            console.log(num2)
            document.getElementById("Calc Output").innerHTML = num2 
        }
    }
}

function fourc()
{
    {
        if (testiftwo == 0)
        {
            num1 = (num1*10) + 4
            console.log(num1)
            document.getElementById("Calc Output").innerHTML = num1
        }
        else
        {
            num2 = (num2*10) + 4
            console.log(num2)
            document.getElementById("Calc Output").innerHTML = num2 
        }
    }
}

function fivec()
{
    {
        if (testiftwo == 0)
        {
            num1 = (num1*10) + 5
            console.log(num1)
            document.getElementById("Calc Output").innerHTML = num1
        }
        else
        {
            num2 = (num2*10) + 5
            console.log(num2)
            document.getElementById("Calc Output").innerHTML = num2 
        }
    }
}

function sixc()
{
    {
        if (testiftwo == 0)
        {
            num1 = (num1*10) + 6
            console.log(num1)
            document.getElementById("Calc Output").innerHTML = num1
        }
        else
        {
            num2 = (num2*10) + 6
            console.log(num2)
            document.getElementById("Calc Output").innerHTML = num2 
        }
    }
}

function sevenc()
{
    {
        if (testiftwo == 0)
        {
            num1 = (num1*10) + 7
            console.log(num1)
            document.getElementById("Calc Output").innerHTML = num1
        }
        else
        {
            num2 = (num2*10) + 7
            console.log(num2)
            document.getElementById("Calc Output").innerHTML = num2 
        }
    }
}

function eightc()
{
    {
        if (testiftwo == 0)
        {
            num1 = (num1*10) + 8 
            console.log(num1)
            document.getElementById("Calc Output").innerHTML = num1
        }
        else
        {
            num2 = (num2*10) + 8
            console.log(num2)
            document.getElementById("Calc Output").innerHTML = num2 
        }
    }
}

function ninec()
{
    {
        if (testiftwo == 0)
        {
            num1 = (num1*10) + 9
            console.log(num1)
            document.getElementById("Calc Output").innerHTML = num1
        }
        else
        {
            num2 = (num2*10) + 9
            console.log(num2)
            document.getElementById("Calc Output").innerHTML = num2 
        }
    }
}

function zeroc()
{
    {
        if (testiftwo == 0)
        {
            num1 = (num1*10)
            console.log(num1)
            document.getElementById("Calc Output").innerHTML = num1
        }
        else
        {
            num2 = (num2*10)
            console.log(num2)
            document.getElementById("Calc Output").innerHTML = num2 
        }
    }
}

function add()
{
    testiftwo = 1
    addition = 1
    document.getElementById("Calc Output").innerHTML = "+"
}

function sub()
{
    testiftwo = 1
    subtraction = 1
    document.getElementById("Calc Output").innerHTML = "-"
}

function div()
{
    testiftwo = 1
    division = 1
    document.getElementById("Calc Output").innerHTML = "/"
}

function mul()
{
    testiftwo = 1
    multiplication = 1
    document.getElementById("Calc Output").innerHTML = "x"
}

function neg_pos()
{
    if (testiftwo == 0)
    {
        num1 = num1*-1
        document.getElementById("Calc Output").innerHTML = num1
    }
    if (testiftwo == 1)
    {
        num2 = num2*-1
        document.getElementById("Calc Output").innerHTML = num2
    }
    
}

function clear()
{
    num1 = 0
    num2 = 0
    testiftwo = 0
    addition = 0
    subtraction = 0
    multiplication = 0
    division = 0
}

function equal()
{
    if (addition == 1)
    {
        ans = num1 + num2
        document.getElementById("Calc Output").innerHTML = ans
    }

    if (subtraction == 1)
    {
        ans = num1 - num2
        document.getElementById("Calc Output").innerHTML = ans
    }

    if (division == 1)
    {
        if (num2 == 0)
        {
            document.getElementById("Calc Output").innerHTML = "Nice Try"
            clear()
            return
        }
        ans = num1 / num2
        document.getElementById("Calc Output").innerHTML = ans
    }

    if (multiplication == 1)
    {
        ans = num1 * num2
        document.getElementById("Calc Output").innerHTML = ans
    }
    
    clear()
}

