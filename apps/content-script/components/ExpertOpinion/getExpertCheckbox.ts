/* Selectors */
import { selectorCreators } from '~script/element-selectors'

/* Get Expert Checkbox */
function getExpertCheckbox(recordNumber: number): HTMLInputElement {
    const checkboxSelector = selectorCreators.expertRowCheckbox(recordNumber)
    const checkboxElement = document.querySelector<HTMLInputElement>(checkboxSelector)

    if (!checkboxElement) {
        throw new Error(`No checkbox element found for record #${checkboxElement}`)
    }

    return checkboxElement
}

export default getExpertCheckbox
