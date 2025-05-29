import React from "react";
import { render, screen } from '@testing-library/react';
import { ClickCounter } from "./Unittest";
describe('Clickcounter', () => {
    test('renders heading', () => {
        //render component in virtual dom
        render(<ClickCounter/>);
        //select element to interact 
        const headd=screen.getByText('hello');
        expect(headd).toBeInTheDocument();
    })
    test("initial count should be 0", () => {
    render(<ClickCounter />);
    const count = screen.getByText("0");
    expect(count).toBeInTheDocument();
    });

    /* test("increments count on button click", () => {
    render(<ClickCounter />);
    const button = screen.getByText("click");
    fireEvent.click(button);
    const updatedCount = screen.getByText("1");
    expect(updatedCount).toBeInTheDocument(); 

    select element to interact getByTestId
    const button = screen.getByTestId("click");
    const incertxt = screen.getByTestId("click");
    fireEvent.click(button);
    expect(incertxt).toHaveTextContent('1');
    });*/
    //data-testid

});