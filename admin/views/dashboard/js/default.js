$(function(){
	$('#randomInsert').submit(function(){
		var data = $(this).serialize();
		console.log(data);
		return false;
	});
	
});