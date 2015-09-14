<?php
	class Error extends Controller{
		function __construct(){
			parent::__construct();
			echo 'This is an error!';
			$this->view->msg = 'This page dont exists';
			$this->view->render('index/index');
		}
	}
?>