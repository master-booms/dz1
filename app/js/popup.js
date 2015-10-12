var myModule = (function(){
	// Инициализирует наш модуль
	var init = function(){
		_setUpListners();
	};
	// Прослушивает событие
	var _setUpListners = function  () {
		$('#add-new-item').on('click', _showModal); // открыть модальное окно 
		$('#add-new-progect').on('submit', _addProgect); // добавление проекта

	};	
	// Работает с модальным окном	
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
	// Добавляет проект
	var _addProgect = function (e){
		console.log('добавление проекта');
		e.preventDefault();


		// обьявляем переменные
		var form = $(this),
			url = 'add_progect.php',
			myServerGiveMeAnAnswer = _ajaxForm(form, url);

			

			console.log(data);
		
		// запрос на сервер
		
		myServerGiveMeAnAnswer.done(function(ans) {
			console.log(ans);
			var successBox = form.find('.success-mess'),
				errorBox = form.find('.error-mess');
			if(ans.status === "OK"){
				console.log(ans.text);
				errorBox.hide();
				successBox.show();
				
			}else{
				errorBox.show();
				successBox.hide();
			}			
		})
		.fail(function() {
			console.log("error");
		})
			
	};
	// Универсальная функция
		// Для ее работы используются 
		// @form - форма
		// @url адрес php файла к которому мы обращаемся

		//1.Проверяет форму
		//2..Собрает данные из формы
		//3.Возвращает ответ с сервера	
	var _ajaxForm = function (form, url) {

		

		// if(!valid) return false;

		data = form.serialize();

		var result = $.ajax ({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		 }).fail(function(ans) {
			console.log('Проблемы в PHP');
			form.find('.error-mess').text('На сервере произошла ошибка').show();	

		});
		 return result;
	};
	
	// Возвращаем объект (публичные методы)
	return {
		init:init
	};
})();

myModule.init();

