/* Components */
import { ExpertOpinion } from '~script/components'

/* Last Year Record Arguments */
interface CurrentYearRecordArguments {
    eligibleRecords: ExpertOpinion[]
    worstRank?: number
    rookiesOnly?: boolean
}

/* Select Last Year Records */
function selectCurrentYearRecords(currentYearArgs: CurrentYearRecordArguments): void {
    const { eligibleRecords, worstRank, rookiesOnly } = currentYearArgs

    if (!worstRank) return

    eligibleRecords.forEach((record) => {
        const rookieStatusGood = !rookiesOnly || !record.lastYearRank
        const rankStatusGood = record.currentYearRank && record.currentYearRank <= worstRank


        if (rookieStatusGood && rankStatusGood) {
            record.selectExpert()
        }
    })
}

export default selectCurrentYearRecords
