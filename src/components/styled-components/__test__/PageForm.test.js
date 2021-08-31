import { render, screen } from "@testing-library/react";
import PageForm from "../PageForm";

const mockedOnCLick = jest.fn();

describe("Page form component", () => {
  test("renders proper title", () => {
    render(
      <PageForm
        title="Flight Details"
        name="Passenger Name"
        onClick={mockedOnCLick}
      />
    );

    const formTitle = screen.getByText("Flight Details", { exact: true });

    expect(formTitle).toBeInTheDocument();
  });

  test("renders name input when name is passed", () => {
    render(
      <PageForm
        title="Flight Details"
        name="Passenger Name"
        onClick={mockedOnCLick}
      />
    );

    const formNameLabel = screen.getByText("Passenger Name", { exact: true });

    expect(formNameLabel).toBeInTheDocument();
  });
});
