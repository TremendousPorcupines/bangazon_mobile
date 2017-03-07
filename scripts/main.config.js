app.config(function($routeProvider){

    let isAuth = 0

    $routeProvider

    .when('/', {
        templateUrl: 'index.html',
        controller: 'ProductsController'
    })
    .when('/products/:id', {
        templateUrl: 'product_detail.html',
        controller: 'DetailController'
    })
    .when('/login', {
        templateUrl: 'login.html',
        controller: 'LoginController'
    })
    .when('/cart', {
        templateUrl: 'cart.html',
        controller: 'CartController',
        resolve: {isAuth}
    })
    .when('/add_payment', {
        templateUrl: 'add_payment.html',
        controller: 'PaymentController',
        resolve: {isAuth}
    })
    .when('/confirmation', {
        templateUrl: 'confirmation.html',
        controller: 'ConfirmationController',
        resolve: {isAuth}
    })
})