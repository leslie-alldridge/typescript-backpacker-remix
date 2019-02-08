import * as React from "react";
import { BagItemEntity } from "../../model";

interface Props {
  key: number;
  id: number;
  description: string;
  destination: string;
  showItems(id): void;
  bagItem: BagItemEntity[];
}

interface State {
  formInput: string;
}

class BagList extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      formInput: ""
    };
    this.formChange = this.formChange.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(id, bagid, input) {
    console.log("delete bag");
  }

  formChange(e) {
    this.setState({
      formInput: e.target.value
    });
  }

  checkItem(id, item) {
    console.log("check bag");
  }

  saveItem(e, id, input) {
    e.preventDefault();
    console.log("save bag");
    this.setState({
      formInput: ""
    });
  }

  render() {
    return (
      <div id="container">
        <div id="line" className="row">
          <div className="col-md-6">
            <div className="todolist not-done">
              <h3 id="list">Bag List</h3>
              <form
                id="todoForm"
                onSubmit={e => {
                  this.saveItem(e, this.props.id, this.state.formInput);
                }}
              >
                <input
                  required
                  onChange={this.formChange}
                  type="text"
                  className="form-control add-todo"
                  placeholder="Item Description"
                  value={this.state.formInput || ""}
                />
                <button id="checkAll" type="submit" className="btn btn-success">
                  Add Item
                </button>
              </form>
              <hr />
              <ul>
                {console.log(this.props)}
                {this.props.bagItem.map(item => {
                  if (item.archived == true)
                    return (
                      <li key={item.id}>
                        {item.bagItem}
                        <i
                          onClick={() => {
                            this.checkItem(this.props.id, item.bagItem);
                          }}
                          className="fas fa-check"
                          id="tick"
                        />
                      </li>
                    );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="todolist">
              <h4>Items Checked</h4>
              <ul id="done-items" className="list-unstyled">
                {this.props.bagItem.map(item => {
                  if (item.archived == false)
                    return (
                      <li key={item.id}>
                        {item.bagItem}
                        <i
                          onClick={() => {
                            this.delete(item.id, item.bagid, item.bagItem);
                          }}
                          id="trash"
                          className="fas fa-trash-alt"
                        />
                      </li>
                    );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BagList;