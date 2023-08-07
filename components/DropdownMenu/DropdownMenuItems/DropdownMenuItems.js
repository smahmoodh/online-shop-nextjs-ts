
const DropdownMenuItems = ({items}) => {
    return (
        <ul className="bg-white p-1 rounded-lg list-none bg-clip-padding shadow-[0_6px_16px_0_#00000014,0_3px_6px_-4px_#0000001f,0_9px_28px_8px_#0000000d]"
            dir="rtl" role="menu" tabIndex="0" data-menu-list="true">
            {items?.length > 0 && items.map((item, index) => (
                item?.type == 'divider' ?
                    <li
                        className="h-[1px] my-1 mx-0 overflow-hidden leading-[0] bg-gray-100"
                        key={index}></li>
                    :
                    <li className="clear-both m-0 py-1 px-3 text-gray-500 font-light text-md"
                        role="menuitem"
                        key={index} tabIndex="-1" data-key={item.key}>
                        <span className="flex-auto">
                            {item.label}
                        </span>
                    </li>

            ))}
        </ul>
    )
}

export default DropdownMenuItems


