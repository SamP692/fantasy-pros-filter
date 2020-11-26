/* Selectors */
import { selectorCreators } from '~script/element-selectors'

/* Types */
type CheckboxElement = HTMLInputElement | null

/* Select Expert */
function selectExpert(recordNumber: number) {
    const checkboxSelector = selectorCreators.expertRowCheckbox(recordNumber)
    const checkboxElement: CheckboxElement = document.querySelector(checkboxSelector)

    if (!checkboxElement) throw new Error(`No checkbox found for record #${checkboxElement}`)

    checkboxElement.checked = true
}

export default selectExpert
