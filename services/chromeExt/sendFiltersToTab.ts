/* Types */
import { FilterConfiguration } from '~global-types'

/* Send Filters To Tab */
function sendFiltersToTab(filters: FilterConfiguration) {
    chrome.tabs.query(
        { active: true, currentWindow: true },
        function (tabs) {
            if (!tabs[0]?.id) throw new Error('Failed to locate active tab')

            chrome.tabs.sendMessage(tabs[0].id, filters)
        }
    )
}

export default sendFiltersToTab
