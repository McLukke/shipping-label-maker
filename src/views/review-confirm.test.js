import { render, screen, act, waitFor, within } from "@testing-library/react";
import ShallowRenderer from "react-test-renderer/shallow";
import renderer from "react-test-renderer";
import user from "@testing-library/user-event";

import ReviewConfirm from "./review-confirm";

describe("Review & Confirm", () => {
  let props;

  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    props = {
      shippingLabel: {
        from: {
          address: "111",
          city: "Holtsville",
          name: "111",
          state: "New York",
          zipCode: 501,
        },
        to: {
          address: "222",
          city: "Aguada",
          name: "222",
          state: "Puerto Rico",
          zipCode: 602,
        },
        ReviewConfirm: 2,
        weight: "333",
      },
      resetAppState: jest.fn(),
      setCurrentStep: jest.fn(),
      currentStep: 4,
    };

    render(<ReviewConfirm {...props} />);
  });

  it("renders without crashing", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ReviewConfirm {...props} />);
    const view = renderer.getRenderOutput();

    expect(view).toBeTruthy();
  });

  it("snapshots to match", () => {
    const component = renderer.create(<ReviewConfirm {...props} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("displays shipping cost", () => {
    expect(screen.getAllByRole("heading")[1]).toContainHTML("shipping cost");
  });

  it("back button returns", () => {
    const backBtn = screen.getAllByRole("button")[0];

    act(() => user.click(backBtn));

    expect(props.setCurrentStep).toHaveBeenCalled();
  });

  it("confirm button resets", () => {
    const confirmBtn = screen.getAllByRole("button")[1];

    act(() => user.click(confirmBtn));

    expect(props.resetAppState).toHaveBeenCalled();
  });
});
