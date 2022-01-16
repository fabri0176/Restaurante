import React from 'react';
import "./AdminLayout.scss";

export function AdminLayout({ children }) {
    return (
        <div>
            <p>Admin Layaout</p>
            {children}
        </div>
    )
}
