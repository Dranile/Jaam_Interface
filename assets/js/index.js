require('../sass/main.scss');

var $ = require('jquery');
require('materialize-css');

$(function () {
	$('.button-collapse').sideNav({
		closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
			draggable: true, // Choose whether you can drag to open on touch screens,
	});

	$(".accordion").each(function(){
		$(this).click(function(){
			$(this).toggleClass("hidden");
			$(this.nextElementSibling).toggle(400);
		});
	})
})