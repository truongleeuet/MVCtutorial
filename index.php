<?php
define('PATH_APPLICATION',__DIR__.'/admin');
require PATH_APPLICATION . '/libs/Bootstrap.php';
require PATH_APPLICATION . '/libs/Controller.php';
require PATH_APPLICATION . '/libs/Model.php';
require PATH_APPLICATION . '/libs/View.php';
$app =  new Bootstrap();
?>
