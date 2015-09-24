<?php
	class Dashboard extends Controller{
		function __construct(){
			parent::__construct();	
			Session::init();
			$logged = Session::get('loggedIn');
			if($logged == false){
				Session::destroy();
				header('location: login');
				exit();
			}
<<<<<<< HEAD

=======
>>>>>>> 67e720c5c6b539309b091d7ca5f220fcada9ca88
			$this->view->js = array('dashboard/js/default.js');
		}
		function index(){
			$this->view->render('dashboard/index');
		}
		function logout(){
			Session::destroy();
			header('location: ../login');
			exit();
		}
<<<<<<< HEAD
		function xhrInsert(){
			
=======
		
		function xhrInsert(){
			$this->model->xhrInsert();
		}
		function xhrGetListings(){
			$this->model->xhrGetListings();
>>>>>>> 67e720c5c6b539309b091d7ca5f220fcada9ca88
		}
	}
?>