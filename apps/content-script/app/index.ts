/* Behaviors */
import openExpertsModal from './openExpertsModal'
import resetExpertSelections from './resetExpertSelections'
import selectLastYearExperts from './selectLastYearExperts'

/* Types */
import type { FilterConfiguration } from '~global-types'

/* App */
function app(filterConfiguration: FilterConfiguration) {
    const {
        currentYearRookies,
        opinionDaysOld,
        currentYearExpertRank,
        lastYearExpertRank
    } = filterConfiguration

    openExpertsModal()

    resetExpertSelections()

    selectLastYearExperts({
        opinionDaysOldThreshold: opinionDaysOld,
        worstExpertRank: lastYearExpertRank
    })
}

export default app
