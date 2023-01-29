import '@testing-library/dom'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, test } from 'vitest'
import { WhyQubly } from '../components/WhyQubly'

describe("WhyQubly - Should reder section correctly", () => {
    test("should render correctly texts fixeds in the document", () => {
        const { getByText } = render(<WhyQubly />)

        expect(getByText("Get actionable insights from Big Data in 3 steps")).toBeInTheDocument()
        expect(getByText("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.")).toBeInTheDocument()
    })

    test("should render container cards", () => {
        const { getByTestId } = render(<WhyQubly />)

        expect(getByTestId("container-card")).toBeInTheDocument()
    })

    test("should render card container in the document", () => {
        const {  getByTestId } = render(<WhyQubly />)

        expect(getByTestId("item-0")).toBeInTheDocument()
        expect(getByTestId("item-1")).toBeInTheDocument()
        expect(getByTestId("item-2")).toBeInTheDocument()
    })

    test("should render all cards icon in the document", () => {
        const {  getByTestId } = render(<WhyQubly />)
        
        expect(getByTestId("item-icon-0")).toBeInTheDocument()
        expect(getByTestId("item-icon-1")).toBeInTheDocument()
        expect(getByTestId("item-icon-2")).toBeInTheDocument()
    })

    test("should render all correctly titles on the cards", () => {
        const {  getByTestId } = render(<WhyQubly />)

        expect(getByTestId("item-title-0")).toBeInTheDocument()
        expect(getByTestId("item-title-1")).toBeInTheDocument()
        expect(getByTestId("item-title-2")).toBeInTheDocument()
    })

    test("should render all texts cards content on the card", () => {
        const {  getByTestId } = render(<WhyQubly />)
        
        expect(getByTestId("item-text-0")).toBeInTheDocument()
        expect(getByTestId("item-text-1")).toBeInTheDocument()
        expect(getByTestId("item-text-2")).toBeInTheDocument()
    })
})