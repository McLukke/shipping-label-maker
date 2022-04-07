import { render, screen, act, waitFor, within } from "@testing-library/react";
import ShallowRenderer from "react-test-renderer/shallow";
import renderer from "react-test-renderer";
import user from "@testing-library/user-event";

import ShippingOption from "./shipping-option";

describe("Shipping Option", () => {
  let props;
  const getSelect = () =>
    screen.getByRole("combobox", { name: /Shipping Option/i });

  const clickNextButton = () =>
    user.click(screen.getByRole("button", { name: /Next/i }));

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
      updateAppState: jest.fn(),
      setCurrentStep: jest.fn(),
      currentStep: 3,
    };

    render(<ShippingOption {...props} />);
  });

  it("renders without crashing", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ShippingOption {...props} />);
    const view = renderer.getRenderOutput();

    expect(view).toBeTruthy();
  });

  it("snapshots to match", () => {
    const component = renderer.create(<ShippingOption {...props} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("submit is called", () => {
    act(() => getSelect());
    clickNextButton();
  });
});
