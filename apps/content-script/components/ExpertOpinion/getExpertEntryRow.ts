/* Selectors */
import { selectorCreators } from '~script/element-selectors'

/* Get Expert Entry Row */
function getExpertEntryRow(rowNumber: number): HTMLTableRowElement {
    const rowSelector = selectorCreators.expertOpinionRow(rowNumber)

    const rowElement = document.querySelector<HTMLTableRowElement>(rowSelector)

    if (!rowElement) throw new Error(`Row element not found for row #${rowNumber}`)

    return rowElement
}

export default getExpertEntryRow
