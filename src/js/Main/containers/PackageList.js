import { connect } from 'react-redux'
import PackageCards from '../components/PackageCards'

const mapStateToProps = (state, ownProps) => {
    if (state.packages === undefined) {
        return {
            isFetching: false,
            items: [],
        }
    }

    let packages = [];
    Object.keys(state.packages.items).map((key, index) => {
        packages.push(state.packages.items[key]);
    });
    packages.sort(function (a, b) {
        const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        if (nameA < nameB) //sort string ascending
            return -1;
        if (nameA > nameB)
            return 1;
        return 0 //default return value (no sorting)
    });

    return {
        isFetching: state.packages.isFetching,
        items: packages,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};

const PackageList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PackageCards);

export default PackageList;