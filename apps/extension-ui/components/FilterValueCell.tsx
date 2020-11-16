/* Libraries */
import React from 'react'

import { Grid } from 'semantic-ui-react'

import type { PropsWithChildren } from 'react'

/* Numeric Filter */
function FilterValueCell({ children }: PropsWithChildren<{}>) {
    return (
        <Grid.Column verticalAlign='middle' textAlign='center' width={5}>
            {children}
        </Grid.Column>
    )
}

export default FilterValueCell
