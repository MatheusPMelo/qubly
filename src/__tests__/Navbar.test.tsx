import "@testing-library/dom"
import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { describe, test } from "vitest"
import { Navbar } from "../components/Navbar"

describe('Navbar - Test component', () => {
    test("Navbar - Should render logo correctly.", () => {
        const { getByRole, getByAltText } = render(<Navbar />)

        expect(getByRole("img")).toBeInTheDocument()
        expect(getByAltText("Logo")).toBeInTheDocument()
    }),
    test("Navbar - Should button for start trial test version.", () => {
        const { getByText } = render(<Navbar/>)

        expect(getByText("Start free trial")).toBeInTheDocument()
    })
})