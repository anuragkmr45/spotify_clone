import React from 'react'

import './ProgressBar.css'

function ProgressBar() {
    return (
        <>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{width: '25%'}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </>
    )
}

export default ProgressBar
