$(function(){
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
});