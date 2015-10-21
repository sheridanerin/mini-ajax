$(document).ready(function() {

	$('body').on('click', '.js-get-users', function() {
		return $.ajax({
			method: 'GET',
			url: 'http://reqr.es/api/users?page=1',
		}).then(handleData, handleError)
	});

	$('body').on('click', '.js-get-users', function() {
		function handleSuccess(res) {
			console.log(res);
		}

		$.ajax({
			method: 'GET',
			url: 'http://reqr.es/api/users?pages=1',
		}).then(handleSuccess);
	});	

	var insertData = function (arr) {
		var tpl = '<div>' +
		'User Info: <ul>' +
		'<li>First name: <span class="js-first">none</span></li>' +
		'<li>Last name: <span class="js-last">none</span></li>' +
		'</ul>' +
		'<hr>' +
		'</div';

		arr.forEach(function (item, i) {
			var $copy = $(tpl);

			$copy.find('.js-first').text(item.first_name);
			$copy.find('.js-last').text(item.last_name);

			$('.js-user-info' + (i + 1)).html($copy);
		});
	}

	$('body').on('click', '.js-get-users', function() {
		return $.ajax({
			method: 'GET',
			url: 'http://reqr.es/api/users?page=1',
		}).then(function (res) {
			consol.log(res);
			insertData(res.data);
		}, function (err) {
			console.error(err);
		});
	})















});