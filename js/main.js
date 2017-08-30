function up_quant(){
	var $quant = document.getElementById("quant");
	var quant = parseInt($quant.innerHTML) + 1;
	$quant.innerHTML = quant;
};

function down_quant(){
	var $quant = document.getElementById("quant");
	var quant = parseInt($quant.innerHTML) - 1;
	$quant.innerHTML = quant;
};