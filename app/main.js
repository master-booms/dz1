function _fileUpload(myForm) {
		$('#upload-file').on('change', function() {			
			var input = $(this), 
				// IE:
				// need to use $(this).val() 
				// instead input[0].files[0].name,
				// TODO: remove fakepath with RegExp
				fileName = input.val(),
				fakeInput = $('#fake-upload');
			//console.log('Выбран файл: ' + fileName);
			fakeInput.val(fileName);
		});
	}; // fileUploadssss