import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal';

const style = {
    content: {
        left: '25%',
        top: '30%',
        height: '40%',
        width: '50%',
    }
};

const DownloadModal = ({ pack, showModal, onCloseModal }) => {
    if (!showModal) {
        return null;
    }
    const contentLabel = pack.name+" Download Options";
    return (
        <Modal
            isOpen={showModal}
            contentLabel="Minimal Modal Example"
            style={style}
        >
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onCloseModal}>
                <span aria-hidden="true">&times;</span>
            </button>
            <h4>{pack.name}</h4>
            <p>To upload onto your catalog, simply copy paste those lines in a bash task.</p>
            <pre>
                <code>
                    curl ------ <br />
                    cp folder <br />
                    curl --- <br />
                </code>
            </pre>
            <hr />
            <div className="row justify-content-md-center">
                <button className="btn btn-outline-dark m-1">Copy script</button>
                <button className="btn btn-outline-dark m-1">Go to Github repo</button>
                <button className="btn btn-outline-dark m-1"onClick={onCloseModal}>Close Modal</button>
            </div>
        </Modal>
    )
};

DownloadModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    pack: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        repo_url: PropTypes.string.isRequired,
        version: PropTypes.string.isRequired,
        content: PropTypes.shape({

        }).isRequired,
    }),
    onCloseModal: PropTypes.func.isRequired,
};


export default DownloadModal