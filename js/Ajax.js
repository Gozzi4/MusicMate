
$( document ).ready(function() {

$( '#mongo' ).hide();
$( '#mongo2' ).hide();
$( '#mongo3' ).hide();
$( '#mongo4' ).hide();
$( '#mongo5' ).hide();

});//Script for receiving data for lastFM
function clicked(){
			var x; 
			x = document.getElementById('artistCheck').value;
			if(x !=""){
			$(document).ready(function () {	
$.getJSON('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=daftpunk&api_key=eac7e187eebcff828bb66d9c1b914a73&format=json',{
	   artist:x,
	   mbid:1,
	   api_key: "eac7e187eebcff828bb66d9c1b914a73",
       format: "json"
}, function(json)  {
//Putting data into from LastFm into the Div's 
$('#mongo').html('<h3>'+json.artist.name+'</h3>'+json.artist.bio.content+'<img src=' + json.artist.image[3]["#text"]  + ' />');
//$('#mongo2').html('<h2> Artist'+" :"+json.artist.name +'</h2><img src=' + json.artist.image[3]["#text"]  + ' />');
$('#mongo5').html('<h3>Similar Artist'+" :"+json.artist.similar.artist[0].name +'</h3><img src=' + json.artist.similar.artist[0].image[4]["#text"]  + ' />');
console.log(json);
$( '#mongo' ).show();
$( '#mongo2' ).show();
$( '#mongo5' ).show();

//Hides the two mongo Divs if the Artist isn't on tour
//The Div's are google maps and Tour dates
if(json.artist.ontour == 0){
$( '#mongo3' ).hide();
$( '#mongo4' ).hide();

}else{

$( '#mongo3' ).show();
$( '#mongo4' ).show();

}
	});
});
}
else{
}	
}	

//GET data from  LastFm and placing it into Google maps that displays upcoming events in location for the Artist that's on tour
function clicked1(){
 
			var x = document.getElementById('artistCheck').value;
			if(x !=""){
			$(document).ready(function () {

$.getJSON('http://ws.audioscrobbler.com/2.0/?method=artist.getevents&artist=Cher&api_key=eac7e187eebcff828bb66d9c1b914a73&format=json',{
       page:1,
	   limit:10,
	   artist:x,
       api_key: "eac7e187eebcff828bb66d9c1b914a73",
       format: "json"
}, function(json) {

 



// Json object being placed into a table for the Tour dates div
$('#mongo4').html('<h2>Tour Dates:'+json.events.event[0].title+'</h2><table><tr><th>Venue</th><th> Country</th><th>  and </th><th> Date</th></tr><tr><td>'+json.events.event[0].venue.name+'   '+'</td>  <td>'+json.events.event[0].venue.location.country+'</td><td>    </td><td >'+json.events.event[0].startDate+'</td></tr><tr><td>'+json.events.event[1].venue.name+'   '+'</td>  <td>'+json.events.event[1].venue.location.country+'</td><td>    </td><td >'+json.events.event[1].startDate+'</td></tr><tr><td>'+json.events.event[2].venue.name+'   '+'</td>  <td>'+json.events.event[2].venue.location.country+'</td><td>    </td><td >'+json.events.event[2].startDate+'</td></tr><tr><td>'+json.events.event[3].venue.name+'   '+'</td>  <td>'+json.events.event[3].venue.location.country+'</td><td>    </td><td >'+json.events.event[3].startDate+'</td></tr><tr><td>'+json.events.event[4].venue.name+'   '+'</td>  <td>'+json.events.event[4].venue.location.country+'</td><td>    </td><td >'+json.events.event[4].startDate+'</td></tr><tr><td>'+json.events.event[5].venue.name+'   '+'</td>  <td>'+json.events.event[5].venue.location.country+'</td><td>    </td><td >'+json.events.event[5].startDate+'</td></tr><tr><td>'+json.events.event[6].venue.name+'   '+'</td>  <td>'+json.events.event[6].venue.location.country+'</td><td>    </td><td >'+json.events.event[6].startDate+'</td></tr><tr><td>'+json.events.event[7].venue.name+'   '+'</td>  <td>'+json.events.event[7].venue.location.country+'</td><td>    </td><td >'+json.events.event[7].startDate+'</td></tr></table>'  );

  

//The Json Object being placed into google maps
var locations = [
          ['<b><h3>Venue:</b></h3>'+json.events.event[0].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[0].title, json.events.event[0].venue.location["geo:point"]["geo:lat"], json.events.event[0].venue.location["geo:point"]["geo:long"], 1],
		  ['<b><h3>Venue:</b></h3>'+json.events.event[1].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[1].title, json.events.event[1].venue.location["geo:point"]["geo:lat"], json.events.event[1].venue.location["geo:point"]["geo:long"], 2],
          ['<b><h3>Venue:</b></h3>'+json.events.event[2].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[2].title, json.events.event[2].venue.location["geo:point"]["geo:lat"], json.events.event[2].venue.location["geo:point"]["geo:long"], 3],
          ['<b><h3>Venue:</b></h3>'+json.events.event[3].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[3].title, json.events.event[3].venue.location["geo:point"]["geo:lat"], json.events.event[3].venue.location["geo:point"]["geo:long"], 4],
          ['<b><h3>Venue:</b></h3>'+json.events.event[4].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[4].title, json.events.event[4].venue.location["geo:point"]["geo:lat"], json.events.event[4].venue.location["geo:point"]["geo:long"], 5],
          ['<b><h3>Venue:</b></h3>'+json.events.event[5].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[5].title, json.events.event[5].venue.location["geo:point"]["geo:lat"], json.events.event[5].venue.location["geo:point"]["geo:long"], 6],
		  ['<b><h3>Venue:</b></h3>'+json.events.event[6].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[6].title, json.events.event[6].venue.location["geo:point"]["geo:lat"], json.events.event[6].venue.location["geo:point"]["geo:long"], 7],
          ['<b><h3>Venue:</b></h3>'+json.events.event[7].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[7].title, json.events.event[7].venue.location["geo:point"]["geo:lat"], json.events.event[7].venue.location["geo:point"]["geo:long"], 8],

		  ];
          var map = new google.maps.Map(document.getElementById('mongo3'), {
          zoom: 13,
          center: new google.maps.LatLng(json.events.event[0].venue.location["geo:point"]["geo:lat"], json.events.event[0].venue.location["geo:point"]["geo:long"]),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();
        var marker, i;

        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }
        console.log(json);
		
}
);
});
}
else{

}				
			}
			
//Login page Google maps and Dublin Dates 
$( document ).ready(function() {	

 var x="Dublin";
$.getJSON('http://ws.audioscrobbler.com/2.0/?method=geo.getevents&location=dublin&api_key=eac7e187eebcff828bb66d9c1b914a73&format=json',{
       page:1,
	   limit:10,
	   artist:x,
       api_key: "eac7e187eebcff828bb66d9c1b914a73",
       format: "json"
}, function(json) {


// Json object being placed into a table for the Tour dates div
//$('#mongo9').html('<h2>Events in Dublin:</h2><table><tr><th>Venue</th><th> Artist</th><th> Date</th></tr><tr><td>'+json.events.event[0].venue.name+'   '+'</td>  <td>'+json.events.event[0].title+'</td><td>    </td><td >'+json.events.event[0].startDate+'</td></tr><tr><td>'+json.events.event[1].venue.name+'   '+'</td>  <td>'+json.events.event[1].title+'</td><td>    </td><td >'+json.events.event[1].startDate+'</td></tr><tr><td>'+json.events.event[2].venue.name+'   '+'</td>  <td>'+json.events.event[2].title+'</td><td>    </td><td >'+json.events.event[2].startDate+'</td></tr><tr><td>'+json.events.event[3].venue.name+'   '+'</td>  <td>'+json.events.event[3].title+'</td><td>    </td><td >'+json.events.event[3].startDate+'</td></tr><tr><td>'+json.events.event[4].venue.name+'   '+'</td>  <td>'+json.events.event[4].title+'</td><td>    </td><td >'+json.events.event[4].startDate+'</td></tr><tr><td>'+json.events.event[5].venue.name+'   '+'</td>  <td>'+json.events.event[0].title+'</td><td>    </td><td >'+json.events.event[5].startDate+'</td></tr><tr><td>'+json.events.event[6].venue.name+'   '+'</td>  <td>'+json.events.event[6].title+'</td><td>    </td><td >'+json.events.event[6].startDate+'</td></tr><tr><td>'+json.events.event[7].venue.name+'   '+'</td>  <td>''</td><td>'+ json.events.event[7].title+'   </td><td>'+json.events.event[7].startDate+'</td></tr></table>'  );
$('#mongo9').html('<h2>Events in Dublin:</h2><table><tr><th>Venue</th><th> Artist</th><th>   </th><th> Date</th></tr><tr><td>'+json.events.event[0].venue.name+'   '+'</td>  <td>'+json.events.event[0].title+'</td><td>    </td><td >'+json.events.event[0].startDate+'</td></tr><tr><td>'+json.events.event[1].venue.name+'   '+'</td>  <td>'+json.events.event[1].title+'</td><td>    </td><td >'+json.events.event[1].startDate+'</td></tr><tr><td>'+json.events.event[2].venue.name+'   '+'</td>  <td>'+json.events.event[2].title+'</td><td>    </td><td >'+json.events.event[2].startDate+'</td></tr><tr><td>'+json.events.event[3].venue.name+'   '+'</td>  <td>'+json.events.event[3].title+'</td><td>    </td><td >'+json.events.event[3].startDate+'</td></tr><tr><td>'+json.events.event[4].venue.name+'   '+'</td>  <td>'+json.events.event[4].title+'</td><td>    </td><td >'+json.events.event[4].startDate+'</td></tr><tr><td>'+json.events.event[5].venue.name+'   '+'</td>  <td>'+json.events.event[5].title+'</td><td>    </td><td >'+json.events.event[5].startDate+'</td></tr><tr><td>'+json.events.event[6].venue.name+'   '+'</td>  <td>'+json.events.event[6].title+'</td><td>    </td><td >'+json.events.event[6].startDate+'</td></tr><tr><td>'+json.events.event[7].venue.name+'   '+'</td>  <td>'+json.events.event[7].title+'</td><td>    </td><td >'+json.events.event[7].startDate+'</td></tr></table>'  );
  

//The Json Object being placed into google maps
var locations = [
          ['<b><h3>Venue:</b></h3>'+json.events.event[0].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[0].title, json.events.event[0].venue.location["geo:point"]["geo:lat"], json.events.event[0].venue.location["geo:point"]["geo:long"], 1],
		  ['<b><h3>Venue:</b></h3>'+json.events.event[1].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[1].title, json.events.event[1].venue.location["geo:point"]["geo:lat"], json.events.event[1].venue.location["geo:point"]["geo:long"], 2],
          ['<b><h3>Venue:</b></h3>'+json.events.event[2].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[2].title, json.events.event[2].venue.location["geo:point"]["geo:lat"], json.events.event[2].venue.location["geo:point"]["geo:long"], 3],
          ['<b><h3>Venue:</b></h3>'+json.events.event[3].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[3].title, json.events.event[3].venue.location["geo:point"]["geo:lat"], json.events.event[3].venue.location["geo:point"]["geo:long"], 4],
          ['<b><h3>Venue:</b></h3>'+json.events.event[4].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[4].title, json.events.event[4].venue.location["geo:point"]["geo:lat"], json.events.event[4].venue.location["geo:point"]["geo:long"], 5],
          ['<b><h3>Venue:</b></h3>'+json.events.event[5].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[5].title, json.events.event[5].venue.location["geo:point"]["geo:lat"], json.events.event[5].venue.location["geo:point"]["geo:long"], 6],
		  ['<b><h3>Venue:</b></h3>'+json.events.event[6].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[6].title, json.events.event[6].venue.location["geo:point"]["geo:lat"], json.events.event[6].venue.location["geo:point"]["geo:long"], 7],
          ['<b><h3>Venue:</b></h3>'+json.events.event[7].venue.name+'<h3><b><br>Artist:</b></h3>'+json.events.event[7].title, json.events.event[7].venue.location["geo:point"]["geo:lat"], json.events.event[7].venue.location["geo:point"]["geo:long"], 8],

		  ];
          var map = new google.maps.Map(document.getElementById('mongo8'), {
          zoom: 13,
          center: new google.maps.LatLng(json.events.event[0].venue.location["geo:point"]["geo:lat"], json.events.event[0].venue.location["geo:point"]["geo:long"]),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();
        var marker, i;

        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }
        console.log(json);		
}
);
});

		
			
