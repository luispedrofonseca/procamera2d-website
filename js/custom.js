// Load Videos
$(document).ready(function () {
	$('img[alt="YOUTUBE"]').each(function () 
	{
		var id = $(this).attr('src').split('/')[$(this).attr('src').split('/').length - 1];
		var video = '<iframe class="youtube-player" src="https://www.youtube.com/embed/' + id + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
		$(this).replaceWith(video);
	});
});


// Load User Guide page header
$(document).ready(function () {
	$('img[alt="HEADER"]').each(function () 
	{
		var id = $(this).attr('src').split('/')[$(this).attr('src').split('/').length - 1];
		var video = '<p></p><span class="user-guide-header-icon"><img src="/images/icons/' + id + '.png" width="83"></span>';
		$(this).replaceWith(video);
	});
});


// Load contact form
$(document).ready(function () {
	$('img[alt="CONTACTFORM"]').each(function () 
	{
		var contactform = '<form id="contactform" action="//formspree.io/luispedrofonseca@gmail.com" method="POST"><br/><input type="text" name="name" placeholder="Your name"><br/><input type="email" name="_replyto" placeholder="Your email"><br/><textarea name="message" placeholder="Your message"></textarea><br/><input type="submit" value="Send"></form>';
		$(this).replaceWith(contactform);
	});
});