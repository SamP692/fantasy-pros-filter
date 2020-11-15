/* Libraries */
import React from 'react'

/* Store Provider */
import { FilterStoreProvider } from '~ui/store'

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
        <FilterStoreProvider>
            <AppContainer>
                <AppHeader headerText='Fantasy Pros Advanced Expert Filter' />

                <FilterSelection />
            </AppContainer>
        </FilterStoreProvider>
    )
}

export default App
