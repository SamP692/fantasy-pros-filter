/* Libraries */
import React, { useState } from 'react'

import type { PropsWithChildren } from 'react'

/* Configs */
import { CHEAT_SHEET_REGEX } from '~ui/configs'

/* Filter Store Context */
import filterStoreContext from './filterStoreContext'

/* Type Definitions */
import type { AppError } from './type-definitions'

/* Helpers */
function determineIsOnCheatSheet(callback: (result: boolean) => void) {
    chrome.tabs.query(
        { active: true, currentWindow: true },
        function (tabs) {
            if (tabs[0]?.url) {
                const isOnCheatSheet = !!tabs[0]?.url.match(CHEAT_SHEET_REGEX)?.length

                callback(isOnCheatSheet)
            } else {
                callback(false)
            }
        }
    )
}

/* Filter Store Provider */
function FilterStoreProvider({ children }: PropsWithChildren<{}>) {
    const [onCheatSheet, setOnCheatSheet] = useState(false)
    const [appLoading, setAppLoading] = useState(true)

    const [lastYearExpertRank, setLastYearExpertRank] = useState<number | undefined>(50)
    const [currentYearExpertRank, setCurrentYearExpertRank] = useState<number | undefined>(50)
    const [opinionDaysOld, setOpinionDaysOld] = useState<number | undefined>(0)
    const [currentYearRookies, setCurrentYearRookies] = useState<boolean>(false)
    const [errors, setErrors] = useState<AppError[]>([])

    function updateIsOnCheatSheet(result: boolean) {
        setOnCheatSheet(result)

        setAppLoading(false)
    }

    determineIsOnCheatSheet(updateIsOnCheatSheet)

    return (
        <filterStoreContext.Provider
            value={{
                setCurrentYearExpertRank,
                setCurrentYearRookies,
                setErrors,
                setLastYearExpertRank,
                setOpinionDaysOld,
                currentYearExpertRank,
                currentYearRookies,
                errors,
                lastYearExpertRank,
                opinionDaysOld,
                onCheatSheet,
                appLoading
            }}
        >
            {children}
        </filterStoreContext.Provider>
    )
}

export default FilterStoreProvider
