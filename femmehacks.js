function process (form)
{

	var drugname = form.drugname.value;
	var zipcode = form.zipcode.value;
	var phone-number = form.phone-number.value;
	
	if (drugname = "advil")
	{
		alert("Take 1-2 advil every 6 hours until symptoms end");
	}
	else if (drugname = "benadryl")
	{
		alert ("Take 1 per day until symptoms end");
	}
	
	mapLookup(zipcode);
	
}


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