import React from 'react'
import {render} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from './index'

test("button is disabled", () =>{
    const {container} = render(<Button isDisabled></Button>)

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
})

test("button renders loading or spinner", () =>{
    const {container, getByText} = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector("span")).toBeInTheDocument();
})
test("button render <a> tag", () =>{
    const {container} = render(<Button type="link" isExternal></Button>)

    expect(container.querySelector("a")).toBeInTheDocument();
})
test("button render <Link> component", () =>{
    const {container} = render(<Router><Button href="" type="link"></Button></Router>)

    expect(container.querySelector("a")).toBeInTheDocument();
})