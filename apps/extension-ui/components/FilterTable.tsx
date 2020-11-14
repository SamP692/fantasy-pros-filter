/* Libraries */
import React, { PropsWithChildren } from 'react'

import { Grid } from 'semantic-ui-react'

/* Filter Table */
function FilterTable({ children }: PropsWithChildren<{}>) {
    return (
        <Grid celled>
            {children}
        </Grid>
    )
}

export default FilterTable
