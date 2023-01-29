import "@testing-library/dom"
import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { describe, test } from "vitest"
import { Header } from "../components/Header"

describe("Header - Test component render", () => {
    test("Header - Should render title.", () => {
        const { getByTestId, getByText, getByAltText } = render(<Header />)

        expect(getByText("Your data with real-time analytics")).toBeInTheDocument()
        expect(getByTestId("headerTitle")).toBeInTheDocument()
        expect(getByTestId("headerSubtitle")).toBeInTheDocument()
        expect(getByTestId("headerButtonStartTrial")).toBeInTheDocument()
        expect(getByTestId("headerButtonLearnMore")).toBeInTheDocument()
        expect(getByTestId("headerImage")).toBeInTheDocument()
        expect(getByAltText("conexão a núvem")).toBeInTheDocument()
    })
})