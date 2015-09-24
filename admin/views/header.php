
<!DOCTYPE html>
<html>
<head>
	<title>Test</title>
	
	
	<link rel="stylesheet" type="text/css" href="<?php echo URL; ?>admin/public/css/default.css" />
	<script type="text/javascript" src="<?php echo URL; ?>admin/public/js/jquery.js" >
		/*$(document).ready(function(){
			alert(1);
		});*/
	</script>
	<script type="text/javascript" src="<?php echo URL; ?>admin/public/js/custom.js" ></script>
<<<<<<< HEAD

=======
>>>>>>> 67e720c5c6b539309b091d7ca5f220fcada9ca88
	<?php
		if(isset($this->js)){
			foreach($this->js as $js){
				echo '<script type="text/javascript" src="'.URL.'admin/views/'.$js.'" ></script>';
			}
<<<<<<< HEAD
			//echo 1;
=======
>>>>>>> 67e720c5c6b539309b091d7ca5f220fcada9ca88
		}
	?>
	</head>
	<body>
	<?php Session::init(); ?>
		<div id ="header">
			header
			<br>
			<a href="<?php echo URL; ?>index">Index</a>
			<a href="<?php echo URL; ?>help">Help</a>
			<?php if(Session::get('loggedIn') == true){ ?>
					<a href="<?php echo URL; ?>dashboard/logout">Logout</a>
			<?php }else{ ?>
				<a href="<?php echo URL; ?>login">Login</a>
			<?php } ?>
			
		</div>
		<div id="content">
