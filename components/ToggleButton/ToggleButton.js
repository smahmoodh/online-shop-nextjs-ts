'use client'
import React, { useState } from 'react';

import './ToggleButton.css'

function ToggleButton() {
    // ایجاد وضعیت اولیه برای تعیین وضعیت روشن یا خاموش
    const [isOn, setIsOn] = useState(false);

    // تابعی برای تغییر وضعیت toggle
    const toggleHandler = () => {
        setIsOn(!isOn);
    };

    return (
        <span className="filter-box__toggle-slide-area" onClick={toggleHandler}>
            <div className={`filter-box__filter-toggler ${isOn ? 'filter-box__filter-toggler--active' : ''}`}>
                
                <div className="filter-toggler__circ"></div>
            </div>
            <span className="filter-toggler__toggles toggle-light"></span>
        </span>
    );
}

export default ToggleButton;
