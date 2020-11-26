/**
 * =======================
 * == IMPROVEMENT NOTES ==
 * =======================
 *  - This can eventually check to see that the modal is open and
 *      respond with a success / failure
 */
/* Selectors */
import { specificSelectors } from '~script/element-selectors'

/* Types */
type AnchorElement = HTMLAnchorElement | null

/* Open Experts Modal */
function openExpertsModal() {
    const expertsButton: AnchorElement = document.querySelector(specificSelectors.EXPERTS_BUTTON)

    if (!expertsButton) throw new Error('Could not locate experts button')

    expertsButton.click()
}

export default openExpertsModal
