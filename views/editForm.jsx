
var React = require('react');

class editForm extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <a href = "/"><button>Home</button></a>
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
                <input type="submit" value="Add Expense"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = editForm;