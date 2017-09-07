

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


//========================================================================================================


// PRODUCTS SECTION______________________________________________________________________

$(function(){
	// Filter of type Range
	try {
		$sRange = $('#slider-range');
			$sRange.slider({
				range: true,
				min: 0,
				max: 1100,
				values: [100, 1000],
				slide: function (event, ui){
					$('#inputFrom').val(ui.values[0] + '$');
					$('#inputTo').val(ui.values[1] + '$');
					$('#line-filter .price-from')[0].innerHTML = ui.values[0] + '$';
					$('#line-filter .price-to')[0].innerHTML = ui.values[1] + '$';
				}
			});
			fromValue = $sRange.slider('values', 0);
			toValue = $sRange.slider('values', 1);
			$('#inputFrom').val(fromValue + '$');
			$('#inputTo').val(toValue + '$');
			$('#line-filter .price-from')[0].innerHTML = fromValue + '$';
			$('#line-filter .price-to')[0].innerHTML = toValue + '$';
	} catch(e) {
		// Code
	}
});
//-----------END OF FILTER OF TYPE RANGE

// Size and Brands CheckBoxs interactivity
$('.styled-ul li').on('click', function(ev){

	$(this).toggleClass('active');

	$chkInput = $(this.getElementsByTagName('input')[0]);

	if($chkInput.attr('checked')){
		$chkInput.removeAttr('checked');
		console.log(this);
	}else{
		$chkInput.attr('checked', 'checked');
	};
});
//-----------END OF SIZE AND BRANDS CHECKBOX INTERACTIVITY


// Numeric Paging
$('#product-paging span').on('click', function(){
	for (var i = 0; i < 3; i++) {
		$('#product-paging span')[i].classList.remove('active');
	};
	this.classList.add('active')
});
//----------END OF NUMERIC PAGING



// END OF PRODUCTS SECTION__________________________________________________________


//========================================================================================================

// PRODUCT DETAILS SECTION______________________________________________________________________

//Change Promo Image
$('#product-view-mini .mini-image').on('click', function(ev){
	var imgSRC = (this.getElementsByTagName('img')[0].src).replace('-min.', '.');
	$('#bigImage')[0].src = imgSRC;
	for (var i = 0; i < 3 ; i++) {
		$('.mini-image div')[i].classList.remove('active');
	};
	this.getElementsByTagName('div')[0].classList.add('active');
});
//End of Change Promo Image


//Choosing Size
$('#select-size a').on('click', function(ev){
	ev.preventDefault();
	for (var i = 0; i < 4 ; i++) {
		$('#select-size a')[i].classList.remove('active');
	};
	$(this).addClass('active');
});
//End of Choosing Size


// Choosing Quantity 
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
// End of Choosing Quantity




// END OF PRODUCT DETAILS SECTION__________________________________________________________

//========================================================================================================
