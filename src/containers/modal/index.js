{
  /*I'll create this container using a class based component just to show that I'm used to that as well!*/
}
import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'

const mapStateToProps = (state) => ({
  ...state.modal,
})

class ModalContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: props.modalProps.open,
    }
    this.closeModal = this.closeModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.modalProps.open !== this.props.modalProps.open) {
      this.setState({
        modalIsOpen: nextProps.modalProps.open,
      })
    }
  }

  closeModal() {
    this.props.hideModal()
  }

  afterOpenModal() {
    console.log('after modal open')
  }

  render() {
    if (!this.props.modalType) {
      return null
    }
    return (
      <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          ariaHideApp={false}>
          <h2 ref={(subtitle) => (this.subtitle = subtitle)}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </ReactModal>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(ModalContainer)
