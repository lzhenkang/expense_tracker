
var React = require('react');
var Navbar = require('./navbar')

class overview extends React.Component {
  render() {

    const allExpense = this.props.allExpense;

    const allExpenseList = allExpense.map( expense => {
        return (
                    <tr>
                        <td>{expense.category}</td>
                        <td>${expense.amount}</td>
                        <td>{expense.description}</td>
                        <td>{expense.time_entered.toString().split(" ").slice(0, 4).join(" ")}</td>
                        <td>
                        <a href ={`/editForm/${expense.id}`}><button>  Edit  </button></a>
                        <form method="POST" action="/?_method=delete">
                        <input type = "hidden" name = "expenseId" value = {expense.id}/>
                        <input type="submit" value="Delete"/>
                        </form>
                        </td>
                    </tr>

)
    });
    return (
        <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        </head>

            <body>
                <div class="container">
                    <Navbar />
                    <h1>This is overview.jsx</h1>
                    <p>
                        Viewing expenses for date:&nbsp;{this.props.date}
                        <br/>
                        <a href ={`/overview/${parseInt(this.props.offset) - 1}`}><button>  Previous Day  </button></a>
                        &nbsp;
                        <a href ={`/overview/${parseInt(this.props.offset) + 1}`}><button>  Next Day  </button></a>
                        <br/>
                    </p>

                    <table class="table table-bordered">
                        <thead class="thead-light">
                            <tr>
                                <th>category</th>
                                <th>amount</th>
                                <th>description</th>
                                <th>time created</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allExpenseList}
                        </tbody>
                    </table>
                </div>

            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = overview;