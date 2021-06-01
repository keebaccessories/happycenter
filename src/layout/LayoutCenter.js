import React from 'react'
import Tab from '../components/Tab'


const LayoutCenter = ({children}) => {
    return (
        <div>
            <Tab className="" />
            {children}
        </div>
    );
};

export default LayoutCenter
