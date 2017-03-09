app.controller('NavBarController', function($http, $window, RootFactory) {
  const nav = this;

//gets current users data
  nav.auth = () => {
    $http({
      method: 'GET',
      url: `${RootFactory.getRootUrl()}is_auth/`,
      headers: {
        'Authorization': `Token ${RootFactory.getToken()}`
      }
    }).then(
      res => nav.user = res.data,
      err => console.log(err)
  )};

//dummy login fuction to show navbar change as user logs in
  nav.login = () => {
    $http({
      url: `${RootFactory.getRootUrl()}api-token-auth/`,
      method: "POST",
      data: {
        'username': 'mick',
        'password': 'asdf1234'
      }
    })
      .then(
        (res) => {
          RootFactory.setToken(res.data.token);
          nav.shoppingCart();
          nav.auth();
        },
        err => console.log(err)
      )
    };

  nav.shoppingCart = () => {
    RootFactory.getApiRoot()
      .then(
        root =>
          $http({
            url: `${root.line_items}`,
            headers: {
              'Authorization': `Token ${RootFactory.getToken()}`
            }
          }).then(
            res => nav.cart = res.data,
            err => console.log(err)
          )
      )
  };

  nav.logout = () => {
    $window.location.reload();
  };
  
})
