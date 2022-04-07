import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import ShallowRenderer from "react-test-renderer/shallow";
import renderer from "react-test-renderer";
import user from "@testing-library/user-event";

import CaptureAddressForm from "./capture-address-form";

describe("Enter Receiver Address", () => {
  let props;
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
      postalData: [
        {
          County: "Suffolk County",
          Primary_city: "Holtsville",
          State: "NY",
          US_Zip_Code: 501,
          country: "US",
          createdAt: "2020-02-11T17:24:49.491Z",
          objectId: "n4q6JYkGCy",
          state: "New York",
          stateCode: "NY",
          updatedAt: "2020-02-11T17:24:49.491Z",
        },
        {
          Primary_city: "Aguada",
          State: "PR",
          US_Zip_Code: 602,
          country: "US",
          createdAt: "2020-02-11T17:24:49.491Z",
          objectId: "e2VNrROPDr",
          state: "Puerto Rico",
          stateCode: "PR",
          updatedAt: "2020-02-11T17:24:49.491Z",
        },
      ],
      title: "test",
      updateAppState: jest.fn(),
      setCurrentStep: jest.fn(),
      currentStep: 1,
    };

    render(<CaptureAddressForm {...props} />);
  });

  it("renders without crashing", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<CaptureAddressForm {...props} />);
    const view = renderer.getRenderOutput();

    expect(view).toBeTruthy();
  });

  it("snapshots to match", () => {
    const component = renderer.create(<CaptureAddressForm {...props} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("form does not submit on errors", () => {
    clickNextButton();

    expect(props.updateAppState).toHaveBeenCalledTimes(0);
    expect(props.setCurrentStep).toHaveBeenCalledTimes(0);
  });
});
