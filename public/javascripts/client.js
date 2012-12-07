$(function(){
	$("#upload-btn").click(function(){
		$("#upload-pic").attr('src', 'images/dope-sweater.jpg');
	});

	$("#recommend-btn").click(function(){
		$("#shirt").attr('src', 'images/blazer.jpg');
		$("#pants").attr('src', 'images/blue-pants.jpg');
	});

	$("a.thumbnail").click(function(){
		var image = $(this).clone();
		image.attr('height', '140').attr('width','140');
		image.addClass('side-thumb');
		$("#side-images").append(image);
	});

	$("a.side-thumb").click(function(){
		$(this).remove();
	});

	$("#filter").click(function(){
		$("#filter-tags").append('<div class="alert alert-info fade in"><button class="close" data-dismiss="alert" type="button">×</button>Blazer</div>');
		$("#filter-items").html('<li class="span3"><a class="thumbnail" href="#"><img alt="" src="images/blazer.jpg"></a></li>'+
										'</li><li class="span3"><a class="thumbnail" href="#"><img alt="" src="images/pink-blazer.jpg"></a></li>'+
										'<li class="span3"><a class="thumbnail" href="#"><img alt="" src="images/yellow-jacket.jpg"></a></li>');
	});

	$("#login").click(function(){
		window.location = "http://localhost:3000/";
	});
});