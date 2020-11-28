/* Libraries */
import { useState, useEffect } from 'react'

/* Configs */
import { CHEAT_SHEET_REGEX } from '~ui/configs'

/* Hook -- Is On Cheat Sheet */
function useIsOnCheatSheet() {
    const [onCheatSheet, setIsOnCheatSheet] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(function () {
        chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
                if (tabs[0]?.url) {
                    const isOnCheatSheet = !!tabs[0]?.url.match(CHEAT_SHEET_REGEX)?.length

                    setIsOnCheatSheet(isOnCheatSheet)
                } else {
                    setIsOnCheatSheet(false)
                }

                setLoading(false)
            }
        )
    }, [])

    return [onCheatSheet, loading]
}

export default useIsOnCheatSheet
