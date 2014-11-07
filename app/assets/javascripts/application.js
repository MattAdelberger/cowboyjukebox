// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require jquery-dateFormat
//= require_tree .

$(document).ready(function() {

	$('#mailingListLink').click(function() {
		$('#navMailingList').slideToggle();
	});

	var instagramPhotos = [];
	var shows = [];

	$.ajax({
	    url: 'https://api.instagram.com/v1/users/1140395903/media/recent?access_token=1140395903.467ede5.08dc5e6254c249bc850c26c1ebf00a37',
	    type: 'GET',
	    dataType: 'jsonp',
	    success: function(result) {
	    	instagramPhotos = result.data;

	    	var img = $('<img class="col-lg-12 col-md-12">');
	    	var text = $('<p class="new-instagram-caption">');
	    	img.attr('src', instagramPhotos[0].images.standard_resolution.url);
	    	text.text(instagramPhotos[0].caption.text);
	    	$('#newestInstagram').html(img);
	    	$('#newestInstagram').append(text);

	    	$.each(instagramPhotos, function(key, val) {
	    		if( key === 12) {
	    			return false;
	    		}
	    		var img = $('<div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"><img width="100%" height="100%" src=' 
	    			+ instagramPhotos[key].images.standard_resolution.url 
	    			+ '></div>');
	    		img.appendTo('#instagramFeed');
	    	})
	    }
	});

	$.ajax({
	    url: 'http://api.bandsintown.com/artists/cowboyjukebox/events.json?api_version=2.0&app_id=COWBOYJUKEBOX',
	    type: 'GET',
	    dataType: 'jsonp',
	    success: function(result) {
	    	allUpcomingShows = result;

	    	$.each(allUpcomingShows, function(key, val) {

	    		var formattedDate = $.format.date(val.datetime, "MMM d")
	    		var formattedTime = $.format.date(val.datetime, "h:mm a")

	    		$("#allUpcomingShows > tbody").append("<tr><td>"
	    			+ formattedDate + "</td><td>" 
	    			+ val.venue.name + "</td><td>"
	    			+ val.venue.city + ", " + val.venue.region + "</td><td>"
	    			+ formattedTime + "</td><tr>");

	    		$("#sidebarUpcomingShows > tbody").append("<tr><td>"
	    			+ formattedDate + "</td><td>" 
	    			+ val.venue.name + "</td><td>"
	    			+ val.venue.city + ", " + val.venue.region + "</td><td><tr>");
	    	})
	    }
	});

	$.ajax({
	    url: 'http://api.bandsintown.com/artists/cowboyjukebox/events.json?api_version=2.0&app_id=COWBOYJUKEBOX&date=2014-01-01,2014-12-31',
	    type: 'GET',
	    dataType: 'jsonp',
	    success: function(result) {
	    	pastShows = result;

	    	$.each(pastShows, function(key, val) {

	    		var formattedDate = $.format.date(val.datetime, "MMM d")
	    		var formattedTime = $.format.date(val.datetime, "h:mm a")

	    		$("#pastShows > tbody").prepend("<tr><td>"
	    			+ formattedDate + "</td><td>" 
	    			+ val.venue.name + "</td><td>"
	    			+ val.venue.city + ", " + val.venue.region + "</td><td>"
	    			+ formattedTime + "</td><tr>");
	    	})
	    }
	});
});

