var React = require('react');

class Login extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <a href = "/"><button>Home</button></a>
            <h2>Login</h2>
            <form action="/login" method="POST">
                <p>
                    name <input name="name"/>
                </p>
                <p>
                    password <input name="password"/>
                </p>

                <p>
                    <input type="submit"/>
                </p>
            </form>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;