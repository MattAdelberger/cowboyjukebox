$(document).ready(function() {

	var upcomingCount = 0;

	$.ajax({
	    url: 'http://api.bandsintown.com/artists/cowboyjukebox/events.json?api_version=2.0&app_id=COWBOYJUKEBOX&date=upcoming',
	    type: 'GET',
	    dataType: 'jsonp',
	    success: function(result) {
	    	allUpcomingShows = result.reverse();

	    	$.each(allUpcomingShows, function(key, val) {

	    		upcomingCount = upcomingCount + 1;

	    		var formattedDate = $.format.date(val.datetime, "MMM d yyyy")
	    		var formattedTime = $.format.date(val.datetime, "h:mm a")

    			$("#upcomingShows > tbody").prepend("<tr><td>"
    			+ formattedDate + "</td><td>" 
    			+ val.venue.name + "</td><td>"
    			+ val.venue.city + ", " + val.venue.region + "</td><td>"
    			+ formattedTime + "</td><tr>");
	    	})
	    }
	});

	$.ajax({
	    url: 'http://api.bandsintown.com/artists/cowboyjukebox/events.json?api_version=2.0&app_id=COWBOYJUKEBOX&date=all',
	    type: 'GET',
	    dataType: 'jsonp',
	    success: function(result) {
	    	allUpcomingShows = result.reverse();

	    	$.each(allUpcomingShows, function(key, val) {

	    		var formattedDate = $.format.date(val.datetime, "MMM d yyyy")
	    		var formattedTime = $.format.date(val.datetime, "h:mm a")

	    		if(key > upcomingCount) {
		    		$("#allShows > tbody").append("<tr><td>"
		    			+ formattedDate + "</td><td>" 
		    			+ val.venue.name + "</td><td>"
		    			+ val.venue.city + ", " + val.venue.region + "</td><td>"
		    			+ formattedTime + "</td><tr>");
	    		}
	    	})
	    }
	});
});