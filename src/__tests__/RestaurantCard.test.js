import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../components/RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";
import MOCK_HOC_DATA from "../mocks/resCardHOCMock.json";

test("should render restaurant card component", ()=>{
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText("Theobroma");
    expect(name).toBeInTheDocument();
});

test("should render restaurant card promoted label component", ()=>{
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={MOCK_HOC_DATA} />);
    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();
});