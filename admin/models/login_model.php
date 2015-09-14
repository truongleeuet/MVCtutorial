<?php

	class Login_Model extends Model{
		function __construct(){
			parent::__construct();
			
		}
		function run(){
			$sth = $this->db->prepare("Select id from users where 
				login = :login and password = MD5(:password) ");
			$sth->execute(array(
				':login' => $_POST['login'],
				':password' =>$_POST['password']
			));
			//$data = $sth-> fetchAll();
			//print_r($data);
			$count = $sth->rowCount();
			if($count >0 ){
				Session::init();
				Session::set('loggedIn',true);
				header('location: ../dashboard');
			}else{
				header('location:../login');
			}
		}
	}
?>