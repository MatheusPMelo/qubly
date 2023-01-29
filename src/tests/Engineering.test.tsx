import "@testing-library/dom"
import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { describe, test } from "vitest"
import { Engineering } from "../components/Engineering"

describe("Engineering - Should render correctly component", () => {
    test("should render correctly image", () => {
        const {getByTestId} = render(<Engineering />)

        expect(getByTestId("logo")).toBeInTheDocument()
    })

    test("should render correctly text title", () => {
        const {getByText} = render(<Engineering />)

        expect(getByText("Data-driven pipelines in minutes")).toBeInTheDocument()
    })

    test("should render correctly text content", () => {
        const {getByText} = render(<Engineering />)

        expect(getByText("Maintenance-free data pipelines with quick set-up and straight-forward deployments that are powered by a modern & scalable platform.")).toBeInTheDocument()
    })
})