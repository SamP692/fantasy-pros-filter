/* Components */
import { ExpertOpinion } from '~script/components'

/* Create Expert Opinion Records */
function createExpertOpinionRecords(expertCount: number): ExpertOpinion[] {
    const opinionRecords = []

    let expertNumber = 1
    while(expertNumber <= expertCount) {
        opinionRecords.push(new ExpertOpinion(expertNumber))

        expertNumber ++
    }

    return opinionRecords
}

export default createExpertOpinionRecords
