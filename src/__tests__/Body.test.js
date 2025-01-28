import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/bodyMocks.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { act } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search cards based on pizza as input", async () => {
  await act(async ()=>render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  ));

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", {name: "Search"});
  const inputBox = screen.getByTestId("searchInput");

  fireEvent.change(inputBox, {target: {value:"pizza"}});
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");    
  expect(cardsAfterSearch.length).toBe(3);
});

it("should check for top rated restaurants", async () => {
    await act(async ()=>render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    ));
  
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);
  
    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);
  
    const cardsAfterSearch = screen.getAllByTestId("resCard");    
    expect(cardsAfterSearch.length).toBe(19);
  });


