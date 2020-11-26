/* Components */
import { ExpertOpinion } from '~script/components'

/* Filter Arguments */
interface FilterArguments {
    opinionRecords: ExpertOpinion[]
    maximumDaysOld: number
}

/* Filter Out Opinions By Days Old */
function filterOutOpinionsByDaysOld(filterArguments: FilterArguments): ExpertOpinion[] {
    const { opinionRecords, maximumDaysOld } = filterArguments

    const filteredOpinions = opinionRecords.filter(opinion =>
        opinion.opinionDaysOld <= maximumDaysOld
    )

    return filteredOpinions
}

export default filterOutOpinionsByDaysOld
