app.controller('ProductsController', function($scope) {

  $scope.products = 0

  function getAllProducts(){
        let url = `$`;
        $.ajax({
            type: 'GET',
            url: url
        })
    }

});