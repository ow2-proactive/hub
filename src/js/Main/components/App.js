import React from 'react'
import PackageSearchBar from '../containers/PackageSearchBar'
import PackageFilterBar from '../containers/PackageFilterBar'
import PackageList from '../containers/PackageList'
import DownloadOptions from '../containers/DownloadOptions'

const App = () => (
    <div>
        <div className="row">
            <PackageSearchBar />
            <PackageFilterBar />
        </div>
        <PackageList />
        <DownloadOptions />
    </div>
);

export default App;
