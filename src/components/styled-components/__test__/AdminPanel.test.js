import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import AdminPanel from "../AdminPanel";

import store from "../../../store/store";

const MockAdminPanel = () => {
  return (
    <Provider store={store}>
      <AdminPanel option={""} passengerName={""} />
    </Provider>
  );
};

describe("AdminPanel component", () => {
  test("renders inputs", () => {
    render(<MockAdminPanel />);

    const inputElements = screen.getAllByTestId(/outlined-basic/i);

    expect(inputElements.length).toBe(3);
  });

  test("should be able to type in passenger name input", () => {
    render(<MockAdminPanel />);

    const nameInputElement = screen.getByLabelText(/change passenger name/i);

    fireEvent.change(nameInputElement, { target: { value: "Piotr Maniak" } });

    expect(nameInputElement.value).toBe("Piotr Maniak");
  });
});
