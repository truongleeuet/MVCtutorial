<?php
define('PATH_APPLICATION',__DIR__.'/admin');
require PATH_APPLICATION . '/libs/Bootstrap.php';
require PATH_APPLICATION . '/libs/Controller.php';
require PATH_APPLICATION . '/libs/Model.php';
require PATH_APPLICATION . '/libs/View.php';

//Libray
require PATH_APPLICATION . '/libs/Database.php';
require PATH_APPLICATION . '/config/paths.php';
require PATH_APPLICATION . '/config/database.php';
$app =  new Bootstrap();
?>
