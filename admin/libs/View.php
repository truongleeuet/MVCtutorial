<?php
	class View{
		public function __construct(){
			//echo 'This is View';
		}
		public function render($name,$noInclude = false){
			if($noInclude == true){
				require PATH_APPLICATION . '/views/' . $name .'.php';
			}else{
				require PATH_APPLICATION . '/views/header.php'; 
				require PATH_APPLICATION . '/views/' . $name .'.php';
				require PATH_APPLICATION . '/views/footer.php';
			}
			
		}
	}
?>