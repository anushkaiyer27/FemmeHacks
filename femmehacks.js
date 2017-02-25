function process (form)
{
	var drugname = form.drugname.value;
	var zipcode = form.zipcode.value;
	var phone-number = form.phone-number.value;
	
	if (drugname = "the pill")
	{
		var timeshr = 0;
		var timesdy = 1;
		var how = "water";
		var side-ef = "spotting,  nausea, headaches, weight gain, mood changes, missed periods";
	}
	else if (drugname = "Lipitor" || drugname = "lipitor")
	{
		var timeshr = 0;
		var timesdy = 1;
		var how = "water";
		var side-ef = "side eff";
	}
	else if (drugname = "lisinopril")
	{
		var timeshr = 0;
		var timesdy = 1;
		var how = "water";
		var side-ef = "side eff";
	}
	else if (drugname = "Zestril" || "zestril")
	{
		var timeshr = 0;
		var timesdy = 1;
		var how = "water"
		var side-ef = "light headedness, fever, sore throat, high potassium";
	}
	else if (drugname = "metformin")
	{
		var timeshr = 0;
		var timesdy = 1;
		var how = "meal and full glass of water";
		var side-ef = "side eff";
	}
	
	
	mapLookup(zipcode);
	
}

var output = "Take to take "+drugname+" with" +how+"! Side effects include: "+ sideeff+
". Don't worry too much if you experience these, but contact your doctor if these symptoms persist";


function mapLookup(zipcode)
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "website", false);
	
	
	xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);
	
	GET
	
	POST
	
	
	
	}


function nameLookup (drugname)
{
	
	}
	
	
	
	
	
	
	
	
	
	
/*( "form" ).submit(function( event ) {
  if ( $( "input:first" ).val() === "correct" ) {
    $( "span" ).text( "Validated..." ).show();
    return;
  }
 
  $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
  event.preventDefault();*/