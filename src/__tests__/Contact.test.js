import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test('render contact component on the screen', ()=>{
render(<Contact />);
const heading = screen.getByRole("heading");
expect(heading).toBeInTheDocument();
});

test('render submit button on contact us page', () =>{
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

test('check 2 input boxes are rendered on contact us page', ()=>{
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
})