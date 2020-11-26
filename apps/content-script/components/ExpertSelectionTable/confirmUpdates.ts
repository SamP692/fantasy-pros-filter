/* Selectors */
import { specificSelectors } from '~script/element-selectors'

/* Confirm Updates */
function confirmUpdates() {
    const confirmButtonElement =
        document.querySelector<HTMLAnchorElement>(specificSelectors.UPDATE_BUTTON)

    if (!confirmButtonElement) throw new Error('Could not find confirmation button')

    confirmButtonElement.click()
}

export default confirmUpdates
