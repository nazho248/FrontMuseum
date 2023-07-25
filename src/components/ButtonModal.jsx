// ButtonModal.js

import React, { useEffect } from 'react';
import { UseModalMenu } from '../hooks/UseModalMenu';

export function ButtonModal() {
    UseModalMenu();

    return (
        <div className="menu">
            <div id="nav-icon">
                <span />
                <span />
                <span />
            </div>
        </div>
    );
}
