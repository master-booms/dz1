var myModule = (function(){
	
	var init = function(){
		_setUpListners();
	};
	var _setUpListners = function  () {
		$('#add-new-item').on('click', _showModal); // открыть модальное окно 
		$('#add-new-progect').on('submit', _addProgect); // добавление проекта

	};		
	var _showModal = function (e) {
		console.log('вызов модального окна');
	    
	    e.preventDefault();
	    var divPopup = $('#new-progect-popup');
	    	form = divPopup.find('.form-popup');
	    divPopup.bPopup({
	    	speed:650,
	    	transition:'slideDown',
	    	onClose: function () {
	    		form.find('.error-mess').hide();
	    		form.find('.success-mess').hide();
	    	}
	    });				
	};
	
	var _addProgect = function (e){
		console.log('добавление проекта');
		e.preventDefault();


		// обьявляем переменные
		var form = $(this);
		var	url = 'add_progect.php';
		var	data = form.serialize();
			

			console.log(data);
		
		// запрос на сервер
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.done(function(ans) {
			console.log(ans);
			if(ans.status === "OK"){
				form.find('.success-mess').show();
				
			}else{
				form.find('.error-mess').show();
			}			
		})
		.fail(function() {
			console.log("error");
		})
		
		

	};
	
	return {
		init:init
	};
})();

myModule.init();
