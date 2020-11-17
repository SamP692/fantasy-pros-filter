/* Libraries */
import React, { useContext } from 'react'

import { Button } from 'semantic-ui-react'

/* Context */
import { filterStoreContext } from '~ui/store'

/* Submit Button */
function SubmitButton() {
    const {
        currentYearExpertRank,
        lastYearExpertRank,
        opinionDaysOld,
        currentYearRookies
    } = useContext(filterStoreContext)

    function handleSubmit() {
        console.table({
            'Current Year Expert Ranks': currentYearExpertRank,
            'Last Year Expert Ranks': lastYearExpertRank,
            'Opinion Days Old': opinionDaysOld,
            'Current Year Rooks': currentYearRookies
        })
    }

    return (
        <Button
            fluid
            color='green'
            onClick={handleSubmit}
        >
            Update Filters
        </Button>
    )
}

export default SubmitButton
