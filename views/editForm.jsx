
var React = require('react');
var Navbar = require('./navbar')

class editForm extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        </head>
        <body>
          <div class="container">
            <Navbar />
            <h1>This is editForm.jsx</h1>
            <form method="POST" action={`/edit/${this.props.id}?_method=put`}>
                <div>category</div>
                <select name = "category">
                    <option value="food">food</option>
                    <option value="transport">transport</option>
                    <option value="utilities">utilities</option>
                    <option value="Leisure">Leisure</option>
                    <option value="clothing">clothing</option>
                    <option value="rent">rent</option>
                    <option value="others">others</option>
                </select>
                <div>amount</div><input name="amount"/><br/>
                <div>description</div><input name="description"/><br/>
                <input type="submit" value="Change Expense"/>
            </form>
          </div>
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = editForm;