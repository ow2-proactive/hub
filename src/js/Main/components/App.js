import React from 'react'
import PackageFilterBar from '../containers/PackageFilterBar'
import PackageList from '../containers/PackageList'
import DownloadOptions from '../containers/DownloadOptions'

const App = () => (
    <div>
        <PackageFilterBar />
        <PackageList />
        <DownloadOptions />
    </div>
);

export default App;