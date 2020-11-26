/* Child Behaviors */
import expertRecordExists from './expertRecordExists'
import getOpinionDaysOld from './getOpinionDaysOld'
import getExpertRank from './getExpertRank'
import selectExpert from './selectExpert'

/* Utils */
import { createIndefiniteLoopFailure } from '~script/utils'

/* Behavior Arguments */
interface LastYearExpertArgs {
    worstExpertRank?: number
    opinionDaysOldThreshold: number
}

/* Select Experts Based on Last Year Ranks */
function selectLastYearExperts(args: LastYearExpertArgs) {
    const { worstExpertRank, opinionDaysOldThreshold } = args

    if (!worstExpertRank) return

    const checkLoopFailure = createIndefiniteLoopFailure(1000)

    let expertRecord = 0
    while(true) {
        checkLoopFailure()

        expertRecord ++

        if (!expertRecordExists(expertRecord)) break

        const expertOpinionDaysOld = getOpinionDaysOld(expertRecord)

        if (expertOpinionDaysOld > opinionDaysOldThreshold) continue

        const expertRank = getExpertRank(expertRecord)

        if (!expertRank || expertRank > worstExpertRank) continue

        selectExpert(expertRecord)
    }
}

export default selectLastYearExperts
