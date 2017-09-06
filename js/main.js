;(function(){
	// setInterval(function(){
	// 	console.log("Hola");
	// }, 1000);

})();


// INDEX SECTION--------------------------------------------------------------------

function changePromo(currentPromo){
	$('#promos .promo-selected').removeClass('promo-selected');
	for (var i = 0; i < 3 ; i++) {
		$('#promos .promo')[i].style.display = 'none';
	};
	$('.'+currentPromo)[0].style.display = 'block'
	$('.'+currentPromo)[0].style.height = '100%'
};

function promo1(){
	changePromo("promo1");
	$('#control1').addClass('promo-selected');
};

function promo2(){
	changePromo("promo2");
	$('#control2').addClass('promo-selected');
};

function promo3(){
	changePromo("promo3");
	$('#control3').addClass('promo-selected');
};


function changeArrival(currentArrival){
	$('#new-arrivals-paging .active').removeClass('active');

	$('#new-arrivals-content-1')[0].style.opacity = '0';
	$('#new-arrivals-content-2')[0].style.opacity = '0';
	$('#new-arrivals-content-3')[0].style.opacity = '0';

	$('#new-arrivals-content-1')[0].style.display = 'none';
	$('#new-arrivals-content-2')[0].style.display = 'none';
	$('#new-arrivals-content-3')[0].style.display = 'none';

	$('#new-arrivals-'+currentArrival)[0].style.display = 'flex';

	$('#new-arrivals-'+currentArrival)[0].style.opacity = '1';

};


function arrival1(){
	changeArrival("content-1");
	$('#paging1').addClass('active');
};

function arrival2(){
	changeArrival("content-2");
	$('#paging2').addClass('active');
};

function arrival3(){
	changeArrival("content-3");
	$('#paging3').addClass('active');
};


// END OF INDEX SECTION__________________________________________________________



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

