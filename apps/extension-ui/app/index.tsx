/* Libraries */
import React from 'react'

/* Containers */
import FilterSelection from './FilterSelection'

/* Components */
import {
    AppContainer,
    AppHeader
} from '~ui/components'

/* App */
function App() {
    return (
        <AppContainer>
            <AppHeader headerText='Fantasy Pros Advanced Expert Filter' />

            <FilterSelection />
        </AppContainer>
    )
}

export default App
