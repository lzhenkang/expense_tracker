var React = require('react');

class Register extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <a href = "/"><button>Home</button></a>
            <h2>Register for new account</h2>
            <form action="/register" method="POST">
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

module.exports = Register;