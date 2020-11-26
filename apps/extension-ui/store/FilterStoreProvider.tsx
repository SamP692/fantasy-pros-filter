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
function isOnCheatSheet(): boolean {
    let isOnCheatSheet = false

    chrome.tabs.query(
        { active: true, currentWindow: true },
        function (tabs) {
            if (tabs[0]?.url) {
                isOnCheatSheet = !!tabs[0]?.url.match(CHEAT_SHEET_REGEX)?.length
            }
        }
    )

    return isOnCheatSheet
}

/* Filter Store Provider */
function FilterStoreProvider({ children }: PropsWithChildren<{}>) {
    const onCheatSheet = isOnCheatSheet()

    const [lastYearExpertRank, setLastYearExpertRank] = useState<number | undefined>(50)
    const [currentYearExpertRank, setCurrentYearExpertRank] = useState<number | undefined>(50)
    const [opinionDaysOld, setOpinionDaysOld] = useState<number | undefined>(0)
    const [currentYearRookies, setCurrentYearRookies] = useState<boolean>(false)
    const [errors, setErrors] = useState<AppError[]>([])

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
                onCheatSheet
            }}
        >
            {children}
        </filterStoreContext.Provider>
    )
}

export default FilterStoreProvider
