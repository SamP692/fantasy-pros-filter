/* Libraries */
import React from 'react'

import { Header } from 'semantic-ui-react'

/* Components */
import {
    FilterTable,
    NumericFilter,
    BooleanFilter
} from '~ui/components'

/* Filter Selection */
function FilterSelection() {
    function onChange() {

    }

    return (
        <>
            <Header as='h4'>Filter Selection</Header>

            <FilterTable>
                <NumericFilter
                    label='Last Season Expert Rank'
                    onChange={onChange}
                />

                <NumericFilter
                    label='Current Season Expert Rank'
                    onChange={onChange}
                />

                <NumericFilter
                    label='Expert Opinion Days Old'
                    onChange={onChange}
                />

                <BooleanFilter
                    label='Current Year Rookie Experts Only'
                    onChange={onChange}
                />
            </FilterTable>
        </>
    )
}

export default FilterSelection
