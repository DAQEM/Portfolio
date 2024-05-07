"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

const FilterCheckbox = (props: { label: string; icon: string, option: string, defaultChecked: boolean }) => {
    return (
        <label className="label cursor-pointer !justify-start gap-2 !p-1 w-full">
            <input type="checkbox" name="tags[]" className="checkbox checkbox-primary" value={props.option} defaultChecked={props.defaultChecked} />
            <Icon icon={props.icon} className="w-4 h-4" />
            <span className="label-text">{props.label}</span>
        </label>
    );
};

export default FilterCheckbox;
