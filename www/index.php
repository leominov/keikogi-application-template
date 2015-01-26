<?php

define('STATIC_VERSION', '1.0.0');

define('WEB_PATH', __DIR__);

define('ROOT_PATH', __DIR__ . '/..');

define('UPLOAD_PATH', __DIR__ . '/static/uploads');

date_default_timezone_set('Etc/GMT-5');

require_once __DIR__ . '/../vendor/autoload.php';

use Keikogi\Application\Application;
use Silex\Application as SilexApplication;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app = Application::get(array(), true);

// $app->before(function(Request $request, SilexApplication $app) {
// });

// $app->after(function(Request $request, Response $response) use ($app) {
// });

$app->run();
