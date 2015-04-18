$(document).ready(function() {

	$.ajax({
	    url: 'http://api.bandsintown.com/artists/cowboyjukebox/events.json?api_version=2.0&app_id=COWBOYJUKEBOX',
	    type: 'GET',
	    dataType: 'jsonp',
	    success: function(result) {
	    	allUpcomingShows = result;

	    	$.each(allUpcomingShows, function(key, val) {

	    		var formattedDate = $.format.date(val.datetime, "MMM d")
	    		var formattedTime = $.format.date(val.datetime, "h:mm a")

	    		$("#allShows > tbody").append("<tr><td>"
	    			+ formattedDate + "</td><td>" 
	    			+ val.venue.name + "</td><td>"
	    			+ val.venue.city + ", " + val.venue.region + "</td><td>"
	    			+ formattedTime + "</td><tr>");

	    		if(key < 4) {
	    			$("#upcomingShows > tbody").append("<tr><td>"
	    			+ formattedDate + "</td><td>" 
	    			+ val.venue.name + "</td><td>"
	    			+ val.venue.city + ", " + val.venue.region + "</td><td>"
	    			+ formattedTime + "</td><tr>");
	    		}
	    	})
	    }
	});

});