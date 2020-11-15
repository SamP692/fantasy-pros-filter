/* Libraries */
import React from 'react'

import {
    Grid,
    Header
} from 'semantic-ui-react'

import type { PropsWithChildren } from 'react'

/* Numeric Filter */
function FilterCellLabel({ children }: PropsWithChildren<{}>) {
    return (
        <Grid.Column width={11}>
            <Header as='h5'>
                {children}
            </Header>
        </Grid.Column>
    )
}

export default FilterCellLabel
