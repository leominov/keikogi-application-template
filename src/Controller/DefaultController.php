<?php

namespace Controller;

use Silex\Application as SilexApplication;
use Symfony\Component\HttpFoundation\Request;

class DefaultController
{
    public function index(SilexApplication $app, Request $request)
    {
        return $app['twig']->render(
            'Default/index.html.twig',
            array(
                'name' => $request->get('user', 'Mr. Tomato'),
            )
        );
    }
}
