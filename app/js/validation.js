var validation = (function(){

	// Инициализирует наш модуль
	var init = function(){
		_setUpListners();
	};

	// Прослушивает события
	var _setUpListners = function  () {
		$('form').on('keydown', '.has-error', _removeError);
		$('form').on('reset', _clearForm);


	};

	//Чистит форму от тултипов
	var _removeError = function(){
		$(this).removeClass('has-error');

	}
	// Очищает форму при нажатии на кнопку reset
	var _clearForm = function  (form) {
		var form = $(this);
		form.find('.input_name, .input-popup, .input-login, .upload-button, .textarea, .textarea-popup').trigger('hideTooltip');
		form.find('.has-error').removeClass('has-error');
	}

	// Создает тултипы
	var _createQtip = function (element, position) {

		// позиция тултипа
		if (position === 'right'){
			position ={
				my:'left center',
				at: 'right center'
			}
		}else {
		  position = {
			my:'right center',
			at:'left center',
			adjust:{
				method:'shift none'
			}
		  }
		}

	// инициализация тултипа
		element.qtip({
			content:{
				text: function  () {
					return $(this).attr('qtip-content');
				}
			},
			show:{
				event: 'show'
			},
			hide:{
				event: 'keydown hideTooltip'
			},
			position:position,
			style:{
				classes:'qtip-mystyle qtip-rounded',
				tip:{
					height:10,
					width:16
				}
			}
		}).trigger('show');


	};

	 // Универсальная функция
	 var validateForm = function  (form) {

	 	console.log('Происходит проверка формы в модуле валидации');

	 	var elements = form.find('input, textarea, .upload-button').not('input[type="file"]'),
	 	valid = true;


	 	// Пройдемся по всем элементам формы
	 	$.each(elements, function  (index, val) {
	 	  var element = $(val),
	 	  	  val = element.val(),
	 	  	  pos = element.attr('qtip-position');
	 	  if(val.length === 0){
	 	  	element.addClass('has-error');
	 	  	_createQtip(element, pos);
	 	  	valid = false;
	 	  }

	 });

	 return valid;
	};

	
// Валидация по эмейлу 
	$('#mail').blur(function() {
		var element = $('#mail'),
			val = element.val(),
			pos = element.attr('qtip-position'),
			$this = $(this);
		if($this.val() != '') {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		if(!pattern.test($this.val())){
			$('#mail').addClass('has-error');
			_createQtip(element, pos);
		} 
	}
});

// Загрузка файла

$('#upload-file').on('change', function(){ // по событию change инпут файла

	var
		$this = $(this),
		val = $this.val(); // берем value у инпут файла (путь загруженого файла)

//что бы отрезать /fakepath/ (это добавляет сам браузер)

	var 
		regexp = /c:\\fakepath\\/gmi, //регулярное выражение для поиска
		pureVal = val.replace(regexp, ''); // заменяем то что нашли в строке - на пустоту

$('#fake-upload')
	.val(pureVal)
	.trigger('hideTooltip')
	.removeClass('has-error'); // вставляем в блок с текстом имя файла

});



	// Возвращает объект (публичные методы)
	return {
		init:init,
		validateForm:validateForm,
		
		
	};

})();

validation.init();










