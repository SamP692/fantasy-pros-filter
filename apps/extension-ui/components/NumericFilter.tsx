/* Libraries */
import React, { ChangeEvent } from 'react'

import {
    Grid,
    Header,
    Input
} from 'semantic-ui-react'

/* Numeric Filter Props */
interface NumericFilterProps {
    label: string
    onChange: (newValue: number | undefined) => void
}

/* Numeric Filter */
function NumericFilter({ label, onChange }: NumericFilterProps) {
    function propogateChange({ target }: ChangeEvent<HTMLInputElement>) {
        const eventValueAsNumber = Number(target.value)

        const changeValue = Number.isNaN(eventValueAsNumber) ? undefined : eventValueAsNumber

        onChange(changeValue)
    }

    return (
        <Grid.Row>
            <Grid.Column width={13}>
                <Header as='h5'>
                    {label}
                </Header>
            </Grid.Column>

            <Grid.Column width={3}>
                <Input
                    type="number"
                    placeholder={99}
                    onChange={propogateChange}
                />
            </Grid.Column>
        </Grid.Row>
    )
}

export default NumericFilter
