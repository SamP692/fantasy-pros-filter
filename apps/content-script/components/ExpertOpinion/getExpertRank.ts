/* Selectors */
import { selectorCreators } from '~script/element-selectors'

/* Types */
type DataElement = HTMLTableDataCellElement | null

/* Arguments for Get Expert Rank */
interface ExpertRankArguments {
    expertNumber: number
    year: 'CURRENT' | 'LAST'
}

/* Get Expert Rank */
function getExpertRank(expertRankArguments: ExpertRankArguments): number | undefined {
    const { expertNumber, year } = expertRankArguments

    const expertRankElementSelector = selectorCreators.expertAccuracy(expertNumber, year)
    const expertRankElement: DataElement = document.querySelector(expertRankElementSelector)

    if (!expertRankElement) {
        throw new Error(`No rank for row #${expertNumber}`)
    }

    const expertRankString = expertRankElement.innerText.trim().split('#')[1]

    if (!expertRankString) return undefined

    const expertRankAsNumber = Number(expertRankString)

    return expertRankAsNumber
}

export default getExpertRank
