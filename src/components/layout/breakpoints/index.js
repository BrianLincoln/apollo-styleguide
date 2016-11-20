import React from 'react';
import './styles.scss';

const Breakpoints = () => {
    return (
        <section className="space-bottom-xl">
            <h2 className="font-title-md space-bottom-md">Breakpoints</h2>
            <ul className="breakpointlist">
                <li className="breakpoint-xs">
                    <div className="breakpoint-name font-lg">Extra Small</div>
                    <div className="font-micro">Viewports 0px-480px</div>
                </li>
                <li className="breakpoint-sm">
                    <div className="breakpoint-name font-lg">Small</div>
                    <div className="font-micro">Viewports 480px-768px</div>
                </li>
                <li className="breakpoint-md">
                    <div className="breakpoint-name font-lg">Medium</div>
                    <div className="font-micro">Viewports 768px-960px</div>
                </li>
                <li className="breakpoint-lg">
                    <div className="breakpoint-name font-lg">Large</div>
                    <div className="font-micro">Viewports 960px+</div>
                </li>
            </ul>
        </section>
    );
};

export default Breakpoints;
