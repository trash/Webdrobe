$(function(){
	var firstImageAdded = false;
	var startOver = false;
	var content;
	$("a[rel=tooltip]").tooltip();

	$(".dropdown-item1").click(function(){
		var newTitle = $(this).html();
		$(".dropdown-target1").html(newTitle);
	});
	$(".dropdown-item2").click(function(){
		var newTitle = $(this).html();
		$(".dropdown-target2").html(newTitle);
	});

	$("#rate-btn").click(function(){
		if(startOver === false){
			var currentItems = $("#side-images").html();
			$("#side-images").html('<div class="thumbnail"><img id="upload-pic" src="http://placehold.it/240x140" alt=""></div>');
			content = $("#rating-location").html();
			$("#rating-location").html('<p class="lead">Our rating: 85%</p><h3>Your outfit:</h3>' + 
				currentItems);
			$("#rate-btn").removeClass('btn-success').addClass('btn-danger').html('<i class="icon-remove-circle"></i> Start Over');
			startOver = true;
		}
		else{
			$("#rating-location").html(content);
			$("#rate-btn").removeClass('btn-danger').addClass('btn-success').html('<i class="icon-hand-right"></i> Rate This Outfit');
			startOver = false;
		}
	});

	$("#upload-btn").click(function(){
		$("#upload-pic").attr('src', 'images/dope-sweater.jpg');
	});

	$("#recommend-btn").click(function(){
		$("#shirt").attr('src', 'images/blazer.jpg');
		$("#pants").attr('src', 'images/blue-pants.jpg');
		$("#rating").html('83%');
	});

	$("#details-btn").toggle(function(){
		$("#details-text").html('<p>Blue shirt by some company</p><p>Some khakis by some other company</p>');
	},function(){
		$("#details-text").html('');
	})

	$("a.thumbnail").click(function(){
		if($(this).hasClass('side-thumb')){
			console.log("click delete");
			$(this).remove();
		}
		else{
			if(firstImageAdded === false){
				firstImageAdded = true;
				$("#side-images").html('');
			};
			var image = $(this).clone();
			image.attr('height', '140').attr('width','140');
			image.addClass('side-thumb');
			$("#side-images").append(image);
		}
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