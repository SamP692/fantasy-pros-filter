import App from './App'

const root = document.querySelector<HTMLDivElement>('div#extension-ui-root')

if (root) {
    new App(root).initialize()
} else {
    throw new Error('Could not find root el')
}
