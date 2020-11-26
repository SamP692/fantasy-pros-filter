/* Selectors */
import { selectorCreators } from '~script/element-selectors'

/* Types */
type RowElement = HTMLTableRowElement | null

/* Convert Text to Days Old Number */
function convertTextToDaysOld(daysOldString: string): number {
    if (daysOldString.includes('days ago')) {
        const daysOldAsString = daysOldString.split(' ')[0]

        const daysOldAsNumber = Number(daysOldAsString)

        return daysOldAsNumber
    } else if (daysOldString.includes('one month')) {
        return 31
    } else if (daysOldString.includes('months')) {
        const monthsOldAsString = daysOldString.split(' ')[0]

        const monthsOldAsNumber = Number(monthsOldAsString)

        const daysOld = monthsOldAsNumber * 31

        return daysOld
    } else {
        throw new Error(`Unrecognized Opinion Age Scheme: ${daysOldString}`)
    }
}

/* Convert Days Old String to Number */
function convertDaysOldToNumber(daysOldString: string): number {
    const standardizedDaysOld = daysOldString.toLowerCase()

    switch(standardizedDaysOld) {
        case 'today':     return 0
        case 'yesterday': return 1
        default:          return convertTextToDaysOld(standardizedDaysOld)
    }
}

/* Get Opinion Days Old */
function validateOpinionAge(opinionRecord: number) {
    const daysOldSelector = selectorCreators.opinionDaysOld(opinionRecord)
    const daysOldElement: RowElement = document.querySelector(daysOldSelector)

    if (!daysOldElement) throw new Error(`No opinion for row #${opinionRecord}`)

    const daysOldValue = daysOldElement.innerText.trim()

    const daysOld = convertDaysOldToNumber(daysOldValue)

    if (Number.isNaN(daysOld)) {
        throw new Error(`Failed to determine opinion age for record #${opinionRecord}`)
    }

    return daysOld
}

export default validateOpinionAge
