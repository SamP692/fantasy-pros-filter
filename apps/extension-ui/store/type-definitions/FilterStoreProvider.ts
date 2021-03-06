/* Libraries */
import { SetStateAction, Dispatch } from 'react'

/* Store */
import AppError from './AppError'

/* Filter Store Provider */
interface FilterStoreProvider {
    onCheatSheet: boolean
    lastYearExpertRank?: number
    currentYearExpertRank?: number
    opinionDaysOld?: number
    currentYearRookies?: boolean
    appLoading: boolean
    errors?: AppError[]
    setCurrentYearExpertRank: Dispatch<SetStateAction<number | undefined>>
    setLastYearExpertRank: Dispatch<SetStateAction<number | undefined>>
    setOpinionDaysOld: Dispatch<SetStateAction<number | undefined>>
    setCurrentYearRookies: Dispatch<SetStateAction<boolean>>
    setErrors: Dispatch<SetStateAction<AppError[]>>
}

export default FilterStoreProvider
