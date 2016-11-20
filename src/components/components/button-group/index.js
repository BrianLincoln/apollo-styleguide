import React from 'react';
import './styles.scss';

const ButtonGroup = () => {
    return (
        <section className="space-bottom-xl">
            <h2 className="font-title-md space-bottom-md">Button Groups</h2>

            <div className="card">
                <h3 className="card-heading">Regular</h3>
                <p><code>.button-group</code> is used to align and space buttons. The default is to center align. Normal sized buttons next to eachother have a margin of <code>$space-md</code> each, so the distance between them is double that. The buttons on the outside remove that margin to fit along the edges.</p>
                <div className="button-group">
                    <a className="button button_mariner">Cool Button</a>
                </div>
            </div>
            <div className="card">
                <h3 className="card-heading">Left</h3>
                <p><code>.button-group_left</code> is a thing. Note that margin is removed from <code>.button_transparent</code>.</p>
                <div className="button-group_left">
                    <a className="button button_mariner">Cool Button</a>
                    <a className="button button_bluewood">Another Button</a>
                    <a className="button button_transparent">Another Button</a>
                </div>
            </div>
            <div className="card">
                <h3 className="card-heading">Right</h3>
                <p><code>.button-group_right</code> is also a thing. Small buttons next to eachother have a margin of <code>$space-sm</code> each.</p>
                <div className="button-group_right">
                    <a className="button_sm button_mariner">Cool Button</a>
                    <a className="button_sm button_bluewood">Another Button</a>
                </div>
            </div>
        </section>
    );
};

export default ButtonGroup;
