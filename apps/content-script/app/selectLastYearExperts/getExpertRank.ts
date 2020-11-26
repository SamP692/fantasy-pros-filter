/* Selectors */
import { selectorCreators } from '~script/element-selectors'

/* Types */
type DataElement = HTMLTableDataCellElement | null

/* Get Expert Rank */
function getExpertRank(expertNumber: number) {
    const expertRankElementSelector = selectorCreators.expertAccuracy(expertNumber, 'LAST')
    const expertRankElement: DataElement = document.querySelector(expertRankElementSelector)

    if (!expertRankElement) throw new Error(`No rank for row #${expertNumber}`)

    const expertRankString = expertRankElement.innerText.trim().split('#')[1]

    if (!expertRankString) return undefined

    const expertRankAsNumber = Number(expertRankString)

    return expertRankAsNumber
}

export default getExpertRank
