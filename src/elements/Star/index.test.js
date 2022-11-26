import React from "react";
import { render } from "@testing-library/react";
import Star from "./index";

test("Should have props [value, width, height, spacing]", () => {
    const height = 40, width = 40, spacing = 4
    const {container} = render(<Star width={width} height={height} spacing={spacing} value={3.6} />)
    const starYellow = "div.stars div.star:not(.placeholder)"

    expect(container.querySelector(starYellow)).toBeInTheDocument()
    expect(container.querySelector(starYellow))
})