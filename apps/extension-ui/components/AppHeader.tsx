/* Libraries */
import React from 'react'

import { Header } from 'semantic-ui-react'

/* App Header Props */
interface AppHeaderProps {
    headerText: string
}

/* App Header */
function AppHeader({ headerText }: AppHeaderProps) {
    return (
        <Header
            as='h3'
            textAlign='center'
            dividing
        >
            {headerText}
        </Header>
    )
}

export default AppHeader
