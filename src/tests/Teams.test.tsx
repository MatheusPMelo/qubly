import '@testing-library/dom'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, test } from 'vitest'
import { Teams } from '../components/Teams'

describe("Teams - Should render teams component correctly in the document", () => {
    
    test("Should render image", () => {
        const { getByTestId } = render(<Teams />)

        expect(getByTestId("logo")).toBeInTheDocument()
    })

    test("Should redender fixed text in title", () => {
        const { getByText } = render(<Teams />)

        expect(getByText("Launch with the best stack")).toBeInTheDocument()
    })
    
    test("Should redender fixed text in text", () => {
        const { getByText } = render(<Teams />)

        expect(getByText("A centralized platform that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind")).toBeInTheDocument()
    })

})