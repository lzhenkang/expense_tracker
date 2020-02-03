var React = require('react');
var Navbar = require('./navbar')

class Login extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/login.css"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        </head>
        <body>
            <div class="container">
                <Navbar />
                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <div className="fadeIn first">
                        {/*<img src="#" id="icon" alt="User Icon" />*/}
                            <div>Register</div>
                        </div>

                        <form action="/login" method="POST">
                            <input type="text" id="login" className="fadeIn second" name="name" placeholder="login"/>
                            <input type="text" id="password" className="fadeIn third" name="password" placeholder="password"/>
                            <input type="submit" className="fadeIn fourth" value="Log In"/>
                        </form>

                        <div id="formFooter">
                            <a className="underlineHover" href="/register">Not a user? Register now!</a>
                        </div>

                    </div>
                </div>

            </div>
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Login;