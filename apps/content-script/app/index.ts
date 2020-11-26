/* Components */
import { ExpertSelectionTable } from '~script/components'

/* Types */
import type { FilterConfiguration } from '~global-types'

/* App */
function app(filterConfiguration: FilterConfiguration) {
    const expertSelectionTable = new ExpertSelectionTable(filterConfiguration)

    expertSelectionTable.updateExpertSelections()
}

export default app
