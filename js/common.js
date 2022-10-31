$(function() {
	$(".toggle-mnu").click(function(e){
		$(this).toggleClass("on");
		$(".top-menu").slideToggle();
		e.preventDefault();
	});
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});



	$(".statistics .s-title").waypoint(function(){
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1400,
			easing: 'swing',
			step: function() {
				$(".item p.num").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
	$(".item p.num").each(function() {
		var tcount = $(this).data("count");
		$(this).animateNumber({ number: tcount,
			easing: 'easeInQuad',
			"font-size": "4.6875em",
			"font-weight": "900",
			numberStep: comma_separator_number_step},
			1000);
		});
		this.destroy();
	}, {
		offset: '70%'
	});	



	

	$(".owl-carousel").owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		autoWidth: false,
		margin: 250,
		navText: ["<img src='img/nav-icon.png'>", "<img src='img/nav-icon.png'>"],
	});

	$(".items > div:nth-child(1) > a:nth-child(2)").mouseover(function(){
		$(".items > div:nth-child(1) > a:nth-child(2)").css({
			"background": "rgba(26, 115, 232, 0.1)",
			color: "#1A73E8"
		});
		$("div.item:nth-child(2) > a:nth-child(2)").css({
			"background-color": "#1A73E8",
			color: "#fff"
		});
	});
	$(".items > div:nth-child(1) > a:nth-child(2)").mouseout(function(){
		$(".items > div:nth-child(1) > a:nth-child(2)").css({
			"background-color": "#1A73E8",
			color: "#fff"
		});
		$("div.item:nth-child(2) > a:nth-child(2)").css({
			"background": "rgba(26, 115, 232, 0.1)",
			color: "#1A73E8"
		});
	});


	$("div.item:nth-child(2) > a:nth-child(2)").mouseover(function(){
		$(".items > div:nth-child(1) > a:nth-child(2)").css({
			"background": "rgba(26, 115, 232, 0.1)",
			color: "#1A73E8"
		});
		$("div.item:nth-child(2) > a:nth-child(2)").css({
			"background-color": "#1A73E8",
			color: "#fff"
		})
	});
	$("div.item:nth-child(2) > a:nth-child(2)").mouseout(function(){
		$(".items > div:nth-child(1) > a:nth-child(2)").css({
			"background-color": "#1A73E8",
			color: "#fff"
		});
		$("div.item:nth-child(2) > a:nth-child(2)").css({
			"background": "rgba(26, 115, 232, 0.1)",
			color: "#1A73E8"
		})
	});
	
	// адаптируем subscribe-to-newsletter
	if($(window).width() < 992){
		let widthBlogImg = $(".blog .blog-item img").width();
		$(".blog .blog-item").width(widthBlogImg);
		$(window).resize(function(){
			let widthBlogImg = $(".blog .blog-item img").width();
			$(".blog .blog-item").width(widthBlogImg);
		});
	}

	// .why-choose-us .layer .layer-1 подгоняем под размер картинки
	let heightImg = $(".why-choose-us .layer .layer-1 .layer-1-2 img").height()
	$(window).resize(function(){
		let heightImg = $(".why-choose-us .layer .layer-1 .layer-1-2 img").height();
		$(".why-choose-us .layer .layer-1").height(heightImg);
	});

	// делаем адаптивную форму
	let widthForm = $(".next-project .layer .layer-2").width();
	let heighForm = $(".next-project .layer .layer-2").height();
	$(".next-project .layer .layer-1").height(heighForm);
	$(".next-project .layer .layer-1").width(widthForm);
	$(window).resize(function(){
		let widthForm = $(".next-project .layer .layer-2").width();
		let heighForm = $(".next-project .layer .layer-2").height();
		$(".next-project .layer .layer-1").height(heighForm);
		$(".next-project .layer .layer-1").width(widthForm);
	})


	// высота input равняем с высотой соседней button
	let hButton = parseInt($(".subscribe-to-newsletter .s7-wrap .s-title form .button2").height());
	let paddingButton = parseInt($(".subscribe-to-newsletter .s7-wrap .s-title form .button2").css("padding-top"));
	let heightButton = paddingButton * 2 + hButton;
	$(".subscribe-to-newsletter .s7-wrap .s-title form input").height(heightButton);
	$(window).resize(function(){
		let hButton = parseInt($(".subscribe-to-newsletter .s7-wrap .s-title form .button2").height());
		let paddingButton = parseInt($(".subscribe-to-newsletter .s7-wrap .s-title form .button2").css("padding-top"));
		let heightButton = paddingButton * 2 + hButton;
		$(".subscribe-to-newsletter .s7-wrap .s-title form input").height(heightButton);
	})


	$(".s-title").animated("zoomIn");
	$(".why-choose-us .s1-left .s1-left-txt").animated("fadeInLeft");
	$(".why-choose-us .layer").animated("fadeInRight");
	$(".what-our-clients-say-about-us .owl-carousel .layers .layer-2").animated("fadeInLeft");
	$(".what-our-clients-say-about-us .owl-carousel .s5-right .s5-right-contant").animated("fadeInRight");
	$(".next-project .s6-left").animated("fadeInLeft");
	$(".next-project .layer").animated("zoomIn");
	$(".subscribe-to-newsletter").animated("zoomIn");

	$(".services").waypoint(function(){
		$(".services .marketind .item").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("item-off").addClass("item-on");
			}, 150*index);
		});
			
	}, {
		offset : "30%"
	});


	$(".blog").waypoint(function(){
		$(".blog .blog-item").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("blog-item-off").addClass("blog-item-on");
			}, 150*index);
		});
			
	}, {
		offset : "50%"
	});

});
