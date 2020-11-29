/* Types */
import { ChromeExtCallback } from '~global-types'

/* Active Tab URL */
function inspectActiveTabUrl(urlCallback: ChromeExtCallback<string | undefined>) {
    chrome.tabs.query(
        { active: true, currentWindow: true },
        (tabs) => { urlCallback(tabs[0]?.url) }
    )
}

export default inspectActiveTabUrl
