import "@testing-library/dom"
import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { describe, test } from "vitest"
import { Tag } from "../components/Tag"

describe("Tag - Test Component", () => {
    test("Tag - Should render correctly", () => {
        const { getByTestId } = render(<Tag title="test component" link="#"/>)

        expect(getByTestId("tagFirstSpan")).toBeInTheDocument()
        expect(getByTestId("tagSecondSpan")).toBeInTheDocument()
        expect(getByTestId("tagLink")).toBeInTheDocument()
    })
})