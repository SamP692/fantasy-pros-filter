/* Libraries */
import React from 'react'
import { render } from 'react-dom'

import 'semantic-ui-css/semantic.min.css'

/* Configs */
import { ENTRY_ELEMENT_ID } from './configs'

/* App */
import App from '~ui/app'

/* Store */
import { FilterStoreProvider } from '~ui/store'

/* App Entry Point Element */
const appEntryElement = document.querySelector(`#${ENTRY_ELEMENT_ID}`)

/* App Initialization */
render(
    <FilterStoreProvider>
        <App />
    </FilterStoreProvider>,
    appEntryElement
)
