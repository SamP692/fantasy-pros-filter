/* Libraries */
import React, { ChangeEvent, useState } from 'react'

import {
    Grid,
    Input
} from 'semantic-ui-react'

/* Components */
import FilterLabelCell from './FilterLabelCell'
import FilterValueCell from './FilterValueCell'

/* Utils */
import { isPositiveNumber } from '~ui/utils'

/* Numeric Filter Props */
interface NumericFilterProps {
    label: string
    defaultValue?: number
    allowZero: boolean
    onChange: (newValue: number | undefined) => void
}

/* Numeric Filter */
function NumericFilter(args: NumericFilterProps) {
    const {
        label,
        defaultValue,
        allowZero,
        onChange
    } = args

    const initialValue = defaultValue === 0 ? 0 : (defaultValue || '')
    const [inputValue, setInputValue] = useState<number | ''>(initialValue)

    function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
        const { value } = target

        if (isPositiveNumber({ value, greaterThanZero: !allowZero })) {
            setInputValue(Number(value))
            onChange(Number(value))
        } else if (value === '') {
            setInputValue('')
            onChange(undefined)
        }
    }

    return (
        <Grid.Row>
            <FilterLabelCell>
                {label}
            </FilterLabelCell>

            <FilterValueCell>
                <Input
                    fluid
                    placeholder={99}
                    value={inputValue}
                    onChange={handleChange}
                />
            </FilterValueCell>
        </Grid.Row>
    )
}

export default NumericFilter
