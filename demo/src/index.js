import React from "react"
import { render } from "react-dom"

import { Timeline } from "../../src"

function Demo() {
    return <>
        <h1>react-i10-timeline demo</h1>
        <Timeline />
    </>
}

render(<Demo />, document.querySelector("#demo"))
