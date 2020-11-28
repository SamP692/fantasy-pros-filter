/* Librares */
import { createContext } from 'react'

/* Provider Defintion */
import type { FilterStoreProvider } from './type-definitions'

/* Context */
const filterStoreContext = createContext<FilterStoreProvider>({
    onCheatSheet: false,
    currentYearRookies: undefined,
    currentYearExpertRank: undefined,
    opinionDaysOld: undefined,
    lastYearExpertRank: undefined,
    errors: [],
    appLoading: true,
    setErrors: () => null,
    setCurrentYearExpertRank: () => null,
    setLastYearExpertRank: () => null,
    setOpinionDaysOld: () => null,
    setCurrentYearRookies: () => null
})

export default filterStoreContext
