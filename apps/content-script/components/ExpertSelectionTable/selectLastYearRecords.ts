/* Components */
import { ExpertOpinion } from '~script/components'

/* Last Year Record Arguments */
interface LastYearRecordArguments {
    eligibleRecords: ExpertOpinion[]
    worstRank?: number
}

/* Select Last Year Records */
function selectLastYearRecords(lastYearArgs: LastYearRecordArguments): void {
    const { eligibleRecords, worstRank } = lastYearArgs

    if (!worstRank) return

    eligibleRecords.forEach((record) => {
        if (record.lastYearRank && record.lastYearRank <= worstRank) {
            record.selectExpert()
        }
    })
}

export default selectLastYearRecords
