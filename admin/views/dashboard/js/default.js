$(function(){
<<<<<<< HEAD
	$('#randomInsert').submit(function(){
		var data = $(this).serialize();
		console.log(data);
		return false;
	});
	
=======
	$.get('dashboard/xhrGetListings',function(o){
		console.log(o);
		
	},'json');

	$('#randomInsert').submit(function(){
		var url = $(this).attr('action');
		var data = $(this).serialize();
		$.post(url, data, function(o) {
			alert(1);
		});
		return false;
	});
>>>>>>> 67e720c5c6b539309b091d7ca5f220fcada9ca88
});