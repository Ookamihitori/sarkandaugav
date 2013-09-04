/*  JavaScript Document                                   */
/*  Written by Chris Converse - http://codifydesign.com   */

$(document).ready(function() {

	$('#locations .location ').click(function(){
		$('.content_container h1').html($(this).html());
		$('.content_container .instructions').css('display','none');
		$('.content_container .contact_info').css('display','block');
		$('.content_container .contact_info a.phonelink').attr('href','tel:'+$(this).attr('data-phone')).html($(this).attr('data-phone'));
	});

});	

