

function loadFileAsText()
    {
	    var myFile = document.getElementById("myFile").files[0];

	    var fileReader = new FileReader();

	    fileReader.onload = function(fileLoadedEvent)
        {
	        var textFromFileLoaded = fileLoadedEvent.target.result;
		    document.getElementById("inputTextToSave").value = textFromFileLoaded;
	    };

	  fileReader.readAsText(myFile);
	}

	function savefile()
    {
		var content = document.getElementById("inputTextToSave").value; //gets value from textbox   
		uriContent = "data:application/octet-stream," + encodeURIComponent(content); //used to be anchored insert into the below anchor
		document.getElementById("dlink").innerHTML = "<a href=" + uriContent + " download=\"savedfile.txt\">Here is the download link</a>";
        //above is to insert the anchor download link and have it download the new file
	}

/* Me trying to do this with Blobs 

function putindata()
{
var fileholder = []
var temp = document.getElementById('input').value
fileholder += temp

document.getElementById("para").innerHTML = fileholder
}


function printout()
{
var abc = new Blob(fileholder, {type : "text"}); 

/////////////////////////////// GeekforGeek Code
var def = new FileReader(); 
def.addEventListener("loadend", function(e) {document.getElementById("para").innerHTML = e.srcElement.result;}); 
///////////////////////////////

def.readAsText(abc);
}

*/