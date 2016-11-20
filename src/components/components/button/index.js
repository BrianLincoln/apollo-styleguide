import React from 'react';
import './styles.scss';

const Button = () => {
    return (
        <section className="space-bottom-xl">
            <h2 className="font-title-md space-bottom-md">Buttons</h2>
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <input className="style-detail-checkbox" id="button-details-checkbox" type="checkbox" />
                    <label htmlFor="button-details-checkbox">
                        <h3 className="font-title-sm">Regular</h3>
                        <a className="button button_valencia">Important Button</a>
                        <a className="button button_mariner">Cool Button</a>
                        <a className="button button_bluewood">Less</a>
                        <a className="button button_porcelain">Another Button</a>
                        <a className="button button_transparent">No Background</a>
                    </label>
                    <div className="style-detail">
                        <pre>.button.button_valencia</pre>
                        <pre>.button.button_mariner</pre>
                        <pre>.button.button_bluewood</pre>
                        <pre>.button.button_porcelain</pre>
                        <pre>.button.button_transparent</pre>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <input className="style-detail-checkbox" id="button_sm-details-checkbox" type="checkbox" />
                    <label htmlFor="button_sm-details-checkbox">
                        <h3 className="font-title-sm">Small</h3>
                        <a className="button_sm button_valencia">Smaller</a>
                        <a className="button_sm button_mariner">This one has more text</a>
                        <a className="button_sm button_bluewood">Tiny</a>
                        <a className="button_sm button_porcelain">Another Button</a>
                        <a className="button_sm button_transparent">No Background</a>
                    </label>
                    <div className="style-detail">
                        <pre>.button_sm.button_valencia</pre>
                        <pre>.button_sm.button_mariner</pre>
                        <pre>.button_sm.button_bluewood</pre>
                        <pre>.button_sm.button_porcelain</pre>
                        <pre>.button_sm.button_transparent</pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Button;
