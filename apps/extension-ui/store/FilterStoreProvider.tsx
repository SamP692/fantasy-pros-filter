/* Libraries */
import React, { useState, useEffect } from 'react'

import type { PropsWithChildren } from 'react'

/* Filter Store Context */
import filterStoreContext from './filterStoreContext'

/* Hooks */
import {
    useIsOnCheatSheet,
    useCachedFilter
} from './hooks'

/* Type Definitions */
import type { AppError } from './type-definitions'

/* Filter Store Provider */
function FilterStoreProvider({ children }: PropsWithChildren<{}>) {
    const [onCheatSheet, locationLoading] = useIsOnCheatSheet()
    const [cachedFilter, cachedFilterLoading] = useCachedFilter()

    const [lastYearExpertRank, setLastYearExpertRank] = useState<number | undefined>(50)
    const [currentYearExpertRank, setCurrentYearExpertRank] = useState<number | undefined>(50)
    const [opinionDaysOld, setOpinionDaysOld] = useState<number | undefined>(0)
    const [currentYearRookies, setCurrentYearRookies] = useState<boolean>(false)
    const [errors, setErrors] = useState<AppError[]>([])

    useEffect(function () {
        if (cachedFilter) {
            setLastYearExpertRank(cachedFilter.lastYearExpertRank)
            setCurrentYearExpertRank(cachedFilter.currentYearExpertRank)
            setOpinionDaysOld(cachedFilter.opinionDaysOld)
            setCurrentYearRookies(cachedFilter.currentYearRookies)
        }
    }, [cachedFilter])

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
                appLoading: !!(locationLoading || cachedFilterLoading)
            }}
        >
            {children}
        </filterStoreContext.Provider>
    )
}

export default FilterStoreProvider
