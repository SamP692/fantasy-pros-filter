/* Libraries */
import React from 'react'
import { render } from 'react-dom'

import 'semantic-ui-css/semantic.min.css'

/* Configs */
import { ENTRY_ELEMENT_ID } from './configs'

/* App */
import App from '~ui/app'

/* App Entry Point Element */
const appEntryElement = document.querySelector(`#${ENTRY_ELEMENT_ID}`)

/* App Initialization */
render(
    <App />,
    appEntryElement
)
