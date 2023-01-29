import "@testing-library/dom"
import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { describe, test } from "vitest"
import { Feedback } from "../components/Feedback"

describe("Feedback - Should render feedback component", () => {
    test("should render feedback fixed text comment", () => {
        const {getByText} = render(<Feedback />)

        expect(getByText('"What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"')).toBeInTheDocument()
    })

    test("should render person image", () => {
        const {getByTestId} = render(<Feedback />)

        expect(getByTestId('personImage')).toBeInTheDocument()
    })

    test("should render fixed person ocupation", () => {
        const {getByTestId} = render(<Feedback />)

        expect(getByTestId('personOccupation')).toBeInTheDocument()
    })
})