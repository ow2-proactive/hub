import { connect } from 'react-redux'
import { closeDownloadOptions } from "../actions/index"
import DownloadModal from '../components/DownloadModal'

const mapStateToProps = (state, ownProps) => {
    if (state.packages === undefined || state.selectedDownloadOptions === null) {
        return {
            showModal: false,
        }
    }

    const asArray = Object.entries(state.packages.items);
    const filteredBySelectedDownloadOptions = asArray.filter(([key, value]) => value.metadata.slug === state.selectedDownloadOptions);
    return {
        showModal: state.selectedDownloadOptions !== null,
        pack: Object.fromEntries(filteredBySelectedDownloadOptions)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCloseModal: (event) => {
            event.preventDefault();
            dispatch(closeDownloadOptions());
        },
        onClickGithubLink: (event, repoLink) => {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Hub Outbound Link',
                eventAction: 'Click',
                eventLabel: repoLink
            });
        }
    }
};

const DownloadOptions = connect(
    mapStateToProps,
    mapDispatchToProps
)(DownloadModal);

export default DownloadOptions;