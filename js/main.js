;(function(){
	// setInterval(function(){
	// 	console.log("Hola");
	// }, 1000);

})();


// INDEX SECTION

function changePromo(currentPromo){
	$('#promos .promo-selected').removeClass('promo-selected');
	for (var i = 0; i < 3 ; i++) {
		$('#promos .promo')[i].style.opacity = '0'
		$('#promos .promo')[i].style.display = 'none';
	};
	$('.'+currentPromo)[0].style.display = 'block'
	$('.'+currentPromo)[0].style.height = '100%'
	$('.'+currentPromo)[0].style.opacity = '1'
};

function promo1(){
	changePromo("promo1")
	$('#control1').addClass('promo-selected');
};

function promo2(){
	changePromo("promo2")
	$('#control2').addClass('promo-selected');
};

function promo3(){
	changePromo("promo3")
	$('#control3').addClass('promo-selected');
};


// END OF INDEX SECTION



function up_quant(){
	var $quant = document.getElementById("quant");
	var quant = parseInt($quant.innerHTML) + 1;
	$quant.innerHTML = quant;
};

function down_quant(){
	var $quant = document.getElementById("quant");
	var quant = parseInt($quant.innerHTML) - 1;
	$quant.innerHTML = (quant > 1) ? quant : 1;
};

