import expect from "expect"
import React from "react"
import { render, unmountComponentAtNode } from "react-dom"

import Timeline from "src/"

describe("Timeline", () => {
    let node

    beforeEach(() => {
        node = document.createElement("div")
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })

    it("renders", () => {
        render(<Timeline />, node, () => {
            console.log("node", node.innerHTML);
            expect(node.innerHTML).toContain("<div class=\"timeline\">");
        })
    })
})
