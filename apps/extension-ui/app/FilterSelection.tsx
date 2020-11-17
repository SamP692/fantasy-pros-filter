/* Libraries */
import React, { useContext } from 'react'

import { Header } from 'semantic-ui-react'

/* Context */
import { filterStoreContext } from '~ui/store'

/* Components */
import {
    FilterTable,
    NumericFilter,
    BooleanFilter
} from '~ui/components'

/* Filter Selection */
function FilterSelection() {
    const {
        setCurrentYearExpertRank,
        setCurrentYearRookies,
        setLastYearExpertRank,
        setOpinionDaysOld
    } = useContext(filterStoreContext)

    return (
        <>
            <Header as='h4'>Filter Selection</Header>

            <FilterTable>
                <NumericFilter
                    label='Last Season Expert Rank'
                    defaultValue={50}
                    allowZero={false}
                    onChange={setLastYearExpertRank}
                />

                <NumericFilter
                    label='Current Season Expert Rank'
                    defaultValue={50}
                    allowZero={false}
                    onChange={setCurrentYearExpertRank}
                />

                <NumericFilter
                    label='Expert Opinion Days Old'
                    defaultValue={0}
                    allowZero={true}
                    onChange={setOpinionDaysOld}
                />

                <BooleanFilter
                    label='Current Year Rookie Experts Only'
                    onChange={setCurrentYearRookies}
                />
            </FilterTable>
        </>
    )
}

export default FilterSelection
