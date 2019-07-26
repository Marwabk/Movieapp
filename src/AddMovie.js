import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="popUp">
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <input
              type="text"
              name="imgUrl"
              placeholder="imgURL"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="title"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="rating"
              placeholder="rating"
              onChange={this.handleChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.props.addMovie({
                  imgUrl: this.state.imgUrl,
                  name: this.state.name,
                  rating:this.state.rating
                });
                this.toggle();
              }}
            >
              Add a Movie
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;