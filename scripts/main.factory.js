app.factory('RootFactory', ($http) => {
  const api_root = 'http://localhost:8000/';
  let secure_token = '';

  return {
    getApiRoot () {
      return $http({
        url: api_root,
        headers: {
          'Authorization': `Token ${secure_token}`
        }
      }).then(
        res => res.data,
        err => console.log(err)
      )
    },
    setToken (token) {
      secure_token = token
    },
    getToken () {
      return secure_token
    },
    getRootUrl () {
      return api_root
    }
  };
});
