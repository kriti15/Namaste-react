import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";
import RestaurantMenu from "../components/RestaurantMenu";
import appStore from "../redux/appStore";
import MOCK_DATA from "../mocks/resMenuMocks.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should render restaurant menu component", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const menuItems = screen.getByText("Garlic Bread (6)");
  fireEvent.click(menuItems);

  expect(screen.getAllByTestId("foodItems").length).toBe(6);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtn = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(8);

  fireEvent.click(screen.getByRole("button", { name: "Clear cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(6);
});
