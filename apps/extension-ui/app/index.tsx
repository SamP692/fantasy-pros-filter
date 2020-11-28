/* Libraries */
import React, { useContext } from 'react'

import { Loader, Header } from 'semantic-ui-react'

/* Context */
import { filterStoreContext } from '~ui/store'

/* Containers */
import FilterSelection from './FilterSelection'
import SubmitButton from './SubmitButton'

/* Components */
import {
    AppContainer,
    AppHeader
} from '~ui/components'

/* Filter Section */
function Filter() {
    return (
        <>
            <FilterSelection />

            <SubmitButton />
        </>
    )
}

/* Navigate to Cheat Sheet Message */
function NavigateMessage() {
    return (
        <Header as='h4'>
            Navigate to a Fantasy Pros cheat sheet to use this tool.
        </Header>
    )
}

/* Body */
interface RenderedBodyProps {
    loading: boolean
    onCheatSheet: boolean
}
function RenderedBody({ loading, onCheatSheet }: RenderedBodyProps) {
    switch (true) {
        case loading:      return <Loader />
        case onCheatSheet: return <Filter />
        default:           return <NavigateMessage />
    }
}

/* App */
function App() {
    const { onCheatSheet, appLoading } = useContext(filterStoreContext)

    return (
        <AppContainer>
            <AppHeader headerText='Fantasy Pros NFL Cheat Sheet Assistant' />

            <RenderedBody loading={appLoading} onCheatSheet={onCheatSheet} />
        </AppContainer>
    )
}

export default App
