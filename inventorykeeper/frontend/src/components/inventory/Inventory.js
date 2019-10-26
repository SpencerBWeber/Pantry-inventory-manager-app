import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getInventory, deleteItem } from "../../actions/inventory";

export class Inventory extends Component {
  static propTypes = {
    inventory: PropTypes.array.isRequired,
    getInventory: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getInventory();
  }

  render() {
    return (
      <Fragment>
        <h2>Inventory</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Count</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {this.props.inventory.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button
                    onClick={this.props.deleteItem.bind(this, item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  inventory: state.inventory.inventory
});

export default connect(
  mapStateToProps,
  { getInventory, deleteItem }
)(Inventory);
