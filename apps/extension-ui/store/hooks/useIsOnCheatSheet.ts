/* Libraries */
import { useState } from 'react'

/* Configs */
import { CHEAT_SHEET_REGEX } from '~ui/configs'

/* Services */
import { chromeExt } from '~services'

/* Hook -- Is On Cheat Sheet */
function useIsOnCheatSheet() {
    const [onCheatSheet, setIsOnCheatSheet] = useState(false)
    const [loading, setLoading] = useState(true)

    function testCheatSheetUrl(activeTabUrl: string | undefined) {
        setIsOnCheatSheet(!!activeTabUrl?.match(CHEAT_SHEET_REGEX)?.length)

        setLoading(false)
    }

    chromeExt.inspectActiveTabUrl(testCheatSheetUrl)

    return [onCheatSheet, loading]
}

export default useIsOnCheatSheet
