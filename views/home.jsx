
var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>This is home.jsx</h1>
            <a href = "login"><button>Login</button></a>
            <a href = "register"><button>Register</button></a>
            <a href = "overview"><button>Overview</button></a>
            <a href = "addExpense"><button>Add Expense</button></a>
            <a href = "logout"><button>Logout</button></a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;