<?php
	class Controller{
		public function __construct(){
			//echo 'Main controller <br>';
			$this->view = new View();

			
		}
		public function loadModel($name){
			$path = PATH_APPLICATION . '/models/' . $name . '_model.php';
			if(file_exists($path)){
				require PATH_APPLICATION . '/models/' . $name . '_model.php';

				$modelName = $name . '_Model';
				$this->model = new $modelName();
			}
		}

	}
?>