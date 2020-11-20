import React from 'react';
import { Spinner } from 'reactstrap';

function PageLoading() {
    return (
        <div className="w-100 text-center p-3">
            <Spinner color="success" />
            <div>Loading...</div>
        </div>
    );
}

export default PageLoading;