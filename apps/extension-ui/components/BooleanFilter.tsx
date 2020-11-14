/* Libraries */
import React, { FormEvent } from 'react'

import {
    Grid,
    Header,
    Checkbox
} from 'semantic-ui-react'

import type { CheckboxProps } from 'semantic-ui-react'

/* Numeric Filter Props */
interface NumericFilterProps {
    label: string
    onChange: (newValue: boolean) => void
}

/* Numeric Filter */
function NumericFilter({ label, onChange }: NumericFilterProps) {
    function propogateChange(_: FormEvent<HTMLInputElement>, { checked }: CheckboxProps) {
        onChange(!!checked)
    }

    return (
        <Grid.Row>
            <Grid.Column width={13}>
                <Header as='h5'>
                    {label}
                </Header>
            </Grid.Column>

            <Grid.Column width={3}>
                <Checkbox
                    placeholder={99}
                    onChange={propogateChange}
                />
            </Grid.Column>
        </Grid.Row>
    )
}

export default NumericFilter
