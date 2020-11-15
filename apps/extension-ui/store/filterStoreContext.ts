/* Librares */
import { createContext } from 'react'

/* Provider Defintion */
import type { FilterStoreProvider } from './type-definitions'

/* Context */
const filterStoreContext = createContext<FilterStoreProvider>({
    currentYearRookies: undefined,
    currentYearExpertRank: undefined,
    opinionDaysOld: undefined,
    lastYearExpertRank: undefined,
    errors: [],
    setErrors: () => null,
    setCurrentYearExpertRank: () => null,
    setLastYearExpertRank: () => null,
    setOpinionDaysOld: () => null,
    setCurrentYearRookies: () => null
})

export default filterStoreContext
