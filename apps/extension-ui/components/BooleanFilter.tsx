/* Libraries */
import React from 'react'

import {
    Grid,
    Checkbox
} from 'semantic-ui-react'

import type { FormEvent } from 'react'
import type { CheckboxProps } from 'semantic-ui-react'

/* Components */
import FilterLabelCell from './FilterLabelCell'
import FilterValueCell from './FilterValueCell'

/* Numeric Filter Props */
interface BooleanFilterProps {
    label: string
    onChange: (newValue: boolean) => void
}

/* Numeric Filter */
function BooleanFilter({ label, onChange }: BooleanFilterProps) {
    function propogateChange(_: FormEvent<HTMLInputElement>, { checked }: CheckboxProps) {
        onChange(!!checked)
    }

    return (
        <Grid.Row>
            <FilterLabelCell>
                {label}
            </FilterLabelCell>

            <FilterValueCell>
                <Checkbox onChange={propogateChange} />
            </FilterValueCell>
        </Grid.Row>
    )
}

export default BooleanFilter
