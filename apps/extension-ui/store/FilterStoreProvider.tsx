/* Libraries */
import React, { useState } from 'react'

import type { PropsWithChildren } from 'react'

/* Filter Store Context */
import filterStoreContext from './filterStoreContext'

/* Type Definitions */
import type { AppError } from './type-definitions'

/* Filter Store Provider */
function FilterStoreProvider({ children }: PropsWithChildren<{}>) {
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
                opinionDaysOld
            }}
        >
            {children}
        </filterStoreContext.Provider>
    )
}

export default FilterStoreProvider
