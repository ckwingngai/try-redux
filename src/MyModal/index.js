import React, { Component } from 'react';
import _ from 'lodash';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Modal from 'react-modal';
import BootstrapModal from '../BootstrapModal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class MyModal extends Component {
  constructor(props) {
    super();

    this.state = {
      modalIsOpen: false,
      smShow: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillMount() {
    // console.log('componentWillMount()', this.props);
  }
  componentWillReceiveProps() {
    // console.log('componentWillReceiveProps()', this.props);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    console.log('MyModal', this.props);
    console.log('state', this.state);
    let smClose = () => this.setState({ smShow: false });
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Button bsStyle="primary">Bootstrap Button</Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>

        <ButtonToolbar>
          <Button bsStyle="primary" onClick={()=>this.setState({ smShow: true })}>
            Launch small demo modal
          </Button>

          <BootstrapModal show={this.state.smShow} onHide={smClose} />
        </ButtonToolbar>
      </div>
    );
  }
}

export default MyModal;
