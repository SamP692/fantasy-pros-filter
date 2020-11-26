/* Selectors */
import { selectorCreators } from '~script/element-selectors'

/* Expert Record Exists */
function expertRecordExists(recordNumber: number) {
    const rowSelector = selectorCreators.expertOpinionRow(recordNumber)

    const rowElement = document.querySelector(rowSelector)

    return !!rowElement
}

export default expertRecordExists
