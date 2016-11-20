import React from 'react';
import './styles.scss';

const Spacing = () => {
    return (
        <section className="col-lg-4">
            <div className="card col-xs-12">
                <h2 className="card-heading">Spacing</h2>
                <ul className="spacelist">
                    <li>
                        <input className="style-detail-checkbox" id="space-xs-checkbox" type="checkbox" />
                        <label htmlFor="space-xs-checkbox">
                            <div className="space-square space-square_xs" />
                            <div className="font-base">Extra Small</div>
                        </label>
                        <div className="style-detail">
                            <pre>5px</pre>
                            <pre>$space-xs</pre>
                            <pre>.space-bottom-xs</pre>
                            <pre>.space-top-xs</pre>
                        </div>
                    </li>
                    <li>
                        <input className="style-detail-checkbox" id="space-sm-checkbox" type="checkbox" />
                        <label htmlFor="space-sm-checkbox">
                            <div className="space-square space-square_sm" />
                            <div className="font-base">Small</div>
                        </label>
                        <div className="style-detail">
                            <pre>10px</pre>
                            <pre>$space-sm</pre>
                            <pre>.space-bottom-sm</pre>
                            <pre>.space-top-sm</pre>
                        </div>
                    </li>
                    <li>
                        <input className="style-detail-checkbox" id="space-md-checkbox" type="checkbox" />
                        <label htmlFor="space-md-checkbox">
                            <div className="space-square space-square_md" />
                            <div className="font-base">Medium</div>
                        </label>
                        <div className="style-detail">
                            <pre>15px</pre>
                            <pre>$space-md</pre>
                            <pre>.space-bottom-md</pre>
                            <pre>.space-top-md</pre>
                        </div>
                    </li>
                    <li>
                        <input className="style-detail-checkbox" id="space-lg-checkbox" type="checkbox" />
                        <label htmlFor="space-lg-checkbox">
                            <div className="space-square space-square_lg" />
                            <div className="font-base">Large</div>
                        </label>
                        <div className="style-detail">
                            <pre>30px</pre>
                            <pre>$space-lg</pre>
                            <pre>.space-bottom-lg</pre>
                            <pre>.space-top-lg</pre>
                        </div>
                    </li>
                    <li>
                        <input className="style-detail-checkbox" id="space-xl-checkbox" type="checkbox" />
                        <label htmlFor="space-xl-checkbox">
                            <div className="space-square space-square_xl" />
                            <div className="font-base">Extra Large</div>
                        </label>
                        <div className="style-detail">
                            <pre>60px</pre>
                            <pre>$space-xl</pre>
                            <pre>.space-bottom-xl</pre>
                            <pre>.space-top-xl</pre>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Spacing;
