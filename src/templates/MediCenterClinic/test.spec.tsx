import { render } from "@testing-library/react";
import MediCenterClinic from ".";

describe("MediCenterClinic Template", () => {
  it("should render the MediCenterClinic component", () => {
    render(<MediCenterClinic />);

    expect(MediCenterClinic).toBeTruthy();
  });
});
