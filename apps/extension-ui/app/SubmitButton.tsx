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
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (!tabs[0]?.id) return

            chrome.tabs.sendMessage(tabs[0].id, {
                currentYearExpertRank,
                lastYearExpertRank,
                opinionDaysOld,
                currentYearRookies
            })
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
