'use client'

import DropdownMenuItems from "@/components/DropdownMenu/DropdownMenuItems/DropdownMenuItems";

import './Dropdown.css'

const Dropdown = ({items, show}) => {
    return (
        <>
            <div className={`absolute top-0 left-0 w-full ${show ? 'active' : ''} `}>
                <div>
                    <div
                        className={`dropdown min-w-[300px] ${show ? 'active' : ''}`}>
                        <DropdownMenuItems items={items} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dropdown


