<?php
	class View{
		public function __construct(){
			//echo 'This is View';
		}
		public function render($name){
			require PATH_APPLICATION . '/views/' . $name .'.php';
		}
	}
?>