/* Libraries */
import React, { PropsWithChildren } from 'react'

/* App Container Styles */
const appContainerStyles = {
    padding: '10px'
}

/* App Container */
function AppContainer({ children }: PropsWithChildren<{}>) {
    return (
        <div style={appContainerStyles}>
            {children}
        </div>
    )
}

export default AppContainer
