import { render, screen, act, waitFor } from "@testing-library/react";
import PackageWeight from "./package-weight";
import ShallowRenderer from "react-test-renderer/shallow";
import renderer from "react-test-renderer";
import user from "@testing-library/user-event";

describe("Package Weight", () => {
  let props;
  const getWeight = () => screen.getByRole("textbox", { name: /weight/i });
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
      currentStep: 2,
    };

    render(<PackageWeight {...props} />);
  });

  it("renders without crashing", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<PackageWeight {...props} />);
    const view = renderer.getRenderOutput();

    expect(view).toBeTruthy();
  });

  it("snapshots to match", () => {
    const component = renderer.create(<PackageWeight {...props} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("submit is called", () => {
    act(() => user.type(getWeight(), "123"));
    clickNextButton();
  });

  it("has required input", async () => {
    clickNextButton();

    await waitFor(() => {
      expect(getWeight()).toHaveClass("ant-input-status-error");
    });
  });
});
