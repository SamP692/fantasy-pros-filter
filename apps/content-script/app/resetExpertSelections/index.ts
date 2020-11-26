/* Selectors */
import { generalSelectors } from '~script/element-selectors'

/* Reset Expert Selections */
function resetExpertSelections() {
    const expertCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(generalSelectors.EXPERT_CHECKBOX)

    if (!expertCheckboxes.length) throw new Error('Could not find any expert checkboxes')

    expertCheckboxes.forEach((checkbox) => {
        checkbox.checked = false
    })
}

export default resetExpertSelections
