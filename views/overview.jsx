
var React = require('react');

class overview extends React.Component {
  render() {

    const allExpense = this.props.allExpense;

    const allExpenseList = allExpense.map( expense => {
        return (<form method="POST" action="/?_method=delete">
                    <tr>
                        <input type = "hidden" name = "expenseId" value = {expense.id}/>
                        <td>{expense.category}</td>
                        <td>${expense.amount}</td>
                        <td>{expense.description}</td>
                        <td>{expense.time_entered.toString()}</td>
                        <td><input type="submit" value="Delete"/></td>
                    </tr>
                </form>)
    });
<style>

</style>

    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
            </head>

            <body>
                <div>
                    <a href = "/"><button>Home</button></a>
                    <h1>This is overview.jsx</h1>
                    <p>
                        Today's date:
                        <script> document.write(new Date().toLocaleDateString()); </script>
                    </p>
                    <table>
                        <tr>
                            <th>category</th>
                            <th>amount</th>
                            <th>description</th>
                            <th>time created</th>
                        </tr>
                        {allExpenseList}
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