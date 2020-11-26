/* Selectors */
import { generalSelectors } from '~script/element-selectors'

/* Get Expert Count */
function getExpertCount(): number {
    const expertRowList = document.querySelectorAll(generalSelectors.EXPERT_ROW)

    return expertRowList.length
}

export default getExpertCount
