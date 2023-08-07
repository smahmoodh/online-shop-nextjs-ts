import React from 'react';
import DropdownMenuItems from "@/components/DropdownMenu/DropdownMenuItems/DropdownMenuItems";

const DropdownMenuBody = ({items}) => {
    return (
        <div className="absolute top-0 left-0 w-full">
            <div>
                <div
                    className="dropdown min-w-[300px]">
                    <DropdownMenuItems {...items} />
                </div>
            </div>
        </div>
    )
}

export default DropdownMenuBody


