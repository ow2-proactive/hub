import { connect } from 'react-redux'
import { closeDownloadOptions } from "../actions/index"
import DownloadModal from '../components/DownloadModal'

const mapStateToProps = (state, ownProps) => {
    if (state.packages === undefined || state.selectedDownloadOptions === null) {
        return {
            showModal: false,
        }
    }
    console.log(state.selectedDownloadOptions !== null, state.packages.items[state.selectedDownloadOptions], state.selectedDownloadOptions);

    return {
        showModal: state.selectedDownloadOptions !== null,
        pack: state.packages.items[state.selectedDownloadOptions],
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCloseModal: (value) => {
            dispatch(closeDownloadOptions());
        }
    }
};

const DownloadOptions = connect(
    mapStateToProps,
    mapDispatchToProps
)(DownloadModal);

export default DownloadOptions;