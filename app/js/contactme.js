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

function getName (str){
	if (str.lastIndexOf('\\')){
		var i = str.lastIndexOf('\\')+1;
	}
	else{
		var i = str.lastIndexOf('/')+1;
	}
	var filename = str.slice(i);
	var uploaded = document.getElementById("fake-upload");
	uploaded.innerHTML = filename;
}



	 // Валидация по эмейлу
	//  var validateEmail = function  (mailForm) {

	//  	console.log('Происходит проверка формы ЭМЕЙЛА в модуле валидации');

	//  	var mailForm = $('#mail'),
	//  		regV = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
	//  		$this = $(this),
	//  		valid = true;


	//  	// Пройдемся по всем элементам формы
	//  	mailForm.blur(function() {
	//  		var element = $(val),
	//  	  	  	val = element.val(),
	//  	  	 	pos = element.attr('qtip-position');
 //        if(val.mailForm != regV) {
 //            
	//  	  	valid = false;
            
	//  	  }

	//  });

	//  return valid;
	// };



