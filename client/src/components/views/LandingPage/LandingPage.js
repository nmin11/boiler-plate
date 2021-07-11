import React, {useEffect} from 'react'
import axios from 'axios';

function LandingPage() {
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => { console.log(response) })
    }, [])

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', widows: '100%', height: '100vh'
        }}>
            <h2>Main Page</h2>
        </div>
    )
}

export default LandingPage
