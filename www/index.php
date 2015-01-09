<?php

define('WEB_PATH', __DIR__);

define('ROOT_PATH', __DIR__ . '/..');

date_default_timezone_set('Etc/GMT-5');

require_once __DIR__ . '/../vendor/autoload.php';

use Keikogi\Application\Application;

$app = Application::get(array(), true);
$app->run();
