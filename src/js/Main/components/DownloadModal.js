import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal';
import CopyToClipboard from 'react-copy-to-clipboard';

const style = {
    content: {
        left: '25%',
        top: '30%',
        height: '40%',
        width: '50%',
    }
};

function onClickCopy(event, txt) {
    console.log("tototototo");
    event.preventDefault();
    txt.select();
    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
}

const DownloadModal = ({ pack, showModal, onCloseModal, onClickGithubLink }) => {
    if (!showModal) {
        return null;
    }
    const contentLabel = pack.name+" Download Options";
    const code =
        // "pwd \n"+
        "./bin/proactive-client -pkg "+pack.repo_url;
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
            <p>To upload onto your catalog, go onto your server <em>ProActive Home Directory</em> and copy paste those lines.</p>
            <pre>
                <code>
                    {code}
                </code>
            </pre>
            <p>For more information or examples on how to install packages, please refer to our <a target="_blank" href="https://www.activeeon.com/public_content/documentation/latest/user/ProActiveUserGuide.html#_install_proactive_packages">technical documentation</a></p>
            <hr />
            <div className="row justify-content-md-center">
                <CopyToClipboard text={code}>
                    <a href="#" className="btn btn-info m-1">Copy script</a>
                </CopyToClipboard>
                {/* <a href={pack.repo_url} className="btn btn-outline-dark m-1" target="_blank" onClick={(event) => onClickGithubLink(event, pack.repo_url)}>Go to Github repo</a> */}
                <a href="#" className="btn btn-outline-info m-1" onClick={onCloseModal}>Close Modal</a>
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
    }),
    onCloseModal: PropTypes.func.isRequired,
    onClickGithubLink: PropTypes.func.isRequired,
};


export default DownloadModal