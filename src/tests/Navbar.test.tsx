import "@testing-library/dom"
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react"
import { describe, test } from "vitest"
import { Navbar } from "../components/Navbar"

describe('Navbar - Test', () => {
    test("Navbar - Should render logo correctly.", () => {
        const { getByRole } = render(<Navbar />)

        expect(getByRole("img")).toBeInTheDocument()
    }),
    test("Navbar - Should render menu items correctly.", () => {
        const { debug, getAllByText } = render(<Navbar/>)

        expect(getAllByText("Lorem")).toBeInTheDocument()

    })
})