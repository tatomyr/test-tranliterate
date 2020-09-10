import {createStore, render} from 'https://tatomyr.github.io/purity/core.js'
  
const stateHandler = (state = {text: ''}, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT': return {text: action.text}
        case 'INIT': return state
        default: return {}
    }
}

export const {mount, dispatch, connect, getState} = createStore(stateHandler)

const handleInput = (e) => {
    const text =  e.target.value
        .replace(/wz/g, 'ƶ').replace(/Wz/g, 'Ƶ')
        .replace(/ji/g, 'ï').replace(/Ji/g, 'Ï')
        .replace(/je/g, 'є').replace(/Je/g, 'Є')
        .replace(/z/g, 'ӡ').replace(/Z/g, 'Ӡ')

    dispatch({type: 'CHANGE_INPUT', text})
}

const App = () => render`
    <div id="root">
        <textarea id="text" ::input=${handleInput}>${getState().text}</textarea>
        <pre id="translated">${getState().text}</pre>
    </div>
`

mount(App)