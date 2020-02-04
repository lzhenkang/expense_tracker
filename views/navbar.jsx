
var React = require('react');

class Navbar extends React.Component {
    render() {
        return (
                    <div>
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        {/*<nav class="navbar navbar-dark bg-primary">*/}
                            <a class="navbar-brand" href="/"><img src="/img/investment.svg" width="60" height="60" className="d-inline-block align-center" alt="" />Expense Tracker</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/overview">Overview <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/addExpense">Add Expense <span class="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        <span className="navbar-text">Track your spendings.</span>
                        <span className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </span>
                        <span className="nav-item">
                            <a className="nav-link" href="/register">Register</a>
                        </span>
                        <span className="nav-item">
                            <a className="nav-link" href="/logout">logout</a>
                        </span>
                    </div>
                        </nav>
                    </div>

    );
  }
}

module.exports = Navbar;