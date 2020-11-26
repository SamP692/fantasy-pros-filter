/* Behaviors */
import getExpertEntryRow from './getExpertEntryRow'
import getOpinionDaysOld from './getOpinionDaysOld'
import getExpertRank from './getExpertRank'
import getExpertCheckbox from './getExpertCheckbox'

/* Expert Opinion */
class ExpertOpinion {
    private rowNumber: number

    public opinionDaysOld: number
    public lastYearRank: number | undefined
    public currentYearRank: number | undefined

    private expertCheckbox: HTMLInputElement

    constructor(rowNumber: number) {
        this.rowNumber = rowNumber

        this.confirmExistence()

        this.opinionDaysOld = getOpinionDaysOld(rowNumber)
        this.lastYearRank = this.getRank('LAST')
        this.currentYearRank = this.getRank('CURRENT')

        this.expertCheckbox = getExpertCheckbox(rowNumber)
    }

    public selectExpert(markSelected?: boolean) {
        const finalSelection = markSelected === undefined ? true : markSelected

        this.expertCheckbox.checked = finalSelection
    }

    private confirmExistence(): void {
        try {
            getExpertEntryRow(this.rowNumber)
        } catch {
            throw new Error(
                `Attempted to create opinion entry for row #${this.rowNumber}` +
                'but no corresponding element was found'
            )
        }
    }

    private getRank(year: 'LAST' | 'CURRENT') {
        return getExpertRank({
            expertNumber: this.rowNumber,
            year
        })
    }
}

export default ExpertOpinion
