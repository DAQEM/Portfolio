"use client";

import { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeSwitch = () => {
    useEffect(() => {
        themeChange(false);
    }, []);

    return (
        <select
            className="select select-primary"
            data-choose-theme
            defaultValue={"pick"}
        >
            <option value="pick" disabled>
                Pick a theme
            </option>
            <option value="">Default</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="retro">Retro</option>
            <option value="dracula">Dracula</option>
            <option value="valentine">Valentine</option>
            <option value="cyberpunk">Cyberpunk</option>
        </select>
    );
};

export default ThemeSwitch;
