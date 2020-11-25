/* Libraries */
import React from 'react'

/* Store Provider */
import { FilterStoreProvider } from '~ui/store'

/* Containers */
import FilterSelection from './FilterSelection'
import SubmitButton from './SubmitButton'

/* Components */
import {
    AppContainer,
    AppHeader
} from '~ui/components'

/* App */
function App() {
    return (
        <AppContainer>
            <FilterStoreProvider>
                <AppHeader headerText='Fantasy Pros NFL Cheat Sheet Assistant' />

                <FilterSelection />

                <SubmitButton />
            </FilterStoreProvider>
        </AppContainer>
    )
}

export default App
