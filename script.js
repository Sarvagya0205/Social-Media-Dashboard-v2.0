window.signIn = function() {
    let oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth ';

    let form = document.createElement('form');
    form.setAttribute('method', 'GET');
    form.setAttribute('action', oauth2Endpoint);
   // not using this function 
    function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/yt-analytics.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  //
    let params = {
        'client_id': '1058789935119-ir2vemi3kdutvsu9mgsar8i2qccsqooi.apps.googleusercontent.com',
        'redirect_uri': 'http://127.0.0.1:5500/Dashboard.html',
        'response_type': 'token',
        'scope': 'https://www.googleapis.com/auth/userinfo.profile',
        'scope' : 'https://www.googleapis.com/auth/youtube.readonly',
        'include_granted_scopes': 'true',
        'state': 'pass-through value',
    };

    for (var p in params) {
        let input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
}