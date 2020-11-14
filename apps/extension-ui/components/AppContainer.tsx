/* Libraries */
import React, { PropsWithChildren } from 'react'

/* Styles */
const appContainerStyles = {
    background: 'blue'
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
