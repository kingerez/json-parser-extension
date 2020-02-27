import * as React from "react"
import * as ReactDOM from "react-dom"

import "../styles/popup.css"

class Hello extends React.Component {
    render() {
        return (
            <div className="popup-padded" />
        )
    }
}

// --------------

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
)