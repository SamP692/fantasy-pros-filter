function app() {
    const root = document.querySelector('div#extension-ui-root')

    if (root) {
        root.innerHTML = 'App'
    } else {
        throw new Error('Could not find root el')
    }
}

export default app
