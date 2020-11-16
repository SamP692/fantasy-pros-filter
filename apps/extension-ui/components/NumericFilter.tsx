/* Libraries */
import React, { ChangeEvent } from 'react'

import {
    Grid,
    Header,
    Input
} from 'semantic-ui-react'

/* Components */
import FilterLabelCell from './FilterLabelCell'
import FilterValueCell from './FilterValueCell'

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
            <FilterLabelCell>
                {label}
            </FilterLabelCell>

            <FilterValueCell>
                <Input
                    type='number'
                    transparent
                    placeholder={99}
                    onChange={propogateChange}
                />
            </FilterValueCell>
        </Grid.Row>
    )
}

export default NumericFilter
