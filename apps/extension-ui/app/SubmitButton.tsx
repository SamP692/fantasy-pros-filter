/* Libraries */
import React, { useContext } from 'react'

import { Button } from 'semantic-ui-react'

/* Services */
import { chromeExt } from '~services'

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
        if (!opinionDaysOld || (!lastYearExpertRank && !currentYearExpertRank)) return

        const finalConfig = {
            currentYearRookies: !!currentYearRookies,
            opinionDaysOld,
            currentYearExpertRank,
            lastYearExpertRank
        }

        chromeExt.sendFiltersToTab(finalConfig)
        chromeExt.updateFilterCache(finalConfig)
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
