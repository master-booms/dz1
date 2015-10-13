var contactMe = (function(){
	
	// Инициализирует наш модуль
	var init = function(){
		_setUpListners();
		};

	// Прослушивает события
	var _setUpListners = function  () {
		$('#contact-me').on('submit', _submitForm);
		

			/* Act on the event */				
	};

	var _submitForm = function (e) {
		console.log('Отправка формы');
		e.preventDefault();

		var form = $(this),
			url = 'contact.php',
			defObj = _ajaxForm(form, url);

			//что то будем делать с ответом сервера defObj
	};

	var _ajaxForm = function  (form, url) {
		console.log('ajax запрос, но спроверкой');
		if (!validation.validateForm(form)) return false;
		//если false то код ниже не произойдет никогда
	}
	// Возвращает объект (публичные методы)
	return {
		init:init
	};
})();

contactMe.init();