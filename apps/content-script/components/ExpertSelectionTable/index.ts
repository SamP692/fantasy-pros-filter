/* Components */
import { ExpertOpinion } from '~script/components'

/* Behaviors */
import getExpertCount from './getExpertCount'
import createExpertOpinionRecords from './createExpertOpinionRecords'
import filterOutOpinionsByDaysOld from './filterOutOpinionsByDaysOld'
import selectLastYearRecords from './selectLastYearRecords'
import selectCurrentYearRecords from './selectCurrentYearRecords'
import confirmUpdates from './confirmUpdates'

/* Types */
import type { FilterConfiguration } from '~global-types'

/* Expert Select Table */
class ExpertSelectionTable {
    private expertOpinionRecords: ExpertOpinion[]

    private filterConfiguration: FilterConfiguration

    constructor(filterConfiguration: FilterConfiguration) {
        this.filterConfiguration = filterConfiguration

        this.expertOpinionRecords = this.createOpinionRecords()
    }

    public updateExpertSelections() {
        this.clearSelections()

        const eligibleRecords = filterOutOpinionsByDaysOld({
            opinionRecords: this.expertOpinionRecords,
            maximumDaysOld: this.filterConfiguration.opinionDaysOld
        })

        selectLastYearRecords({
            eligibleRecords,
            worstRank: this.filterConfiguration.lastYearExpertRank
        })

        selectCurrentYearRecords({
            eligibleRecords,
            worstRank: this.filterConfiguration.currentYearExpertRank,
            rookiesOnly: this.filterConfiguration.currentYearRookies
        })

        confirmUpdates()
    }

    private clearSelections() {
        this.expertOpinionRecords.forEach((opinion) => {
            opinion.selectExpert(false)
        })
    }

    private createOpinionRecords(): ExpertOpinion[] {
        const expertCount = getExpertCount()

        const expertOpinions = createExpertOpinionRecords(expertCount)

        return expertOpinions
    }
}

export default ExpertSelectionTable
