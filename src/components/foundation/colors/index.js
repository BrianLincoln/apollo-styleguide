import React from 'react';
import './styles.scss';

const Colors = () => {
    return (
        <section className="col-lg-4">
            <div className="card col-xs-12">
                <h2 className="card-heading">Color</h2>
                <ul className="colorlist">
                    <li>
                        <input className="style-detail-checkbox" id="color-white-checkbox" type="checkbox" />

                        <label htmlFor="color-white-checkbox">
                            <div className="color-swatch bg-white" />
                            <div className="font-base">White</div>
                        </label>

                        <div className="style-detail">
                            <pre>#FFFFFF</pre>
                            <pre>$color-white</pre>
                            <pre>.bg-white</pre>
                            <pre>.color-white</pre>
                        </div>
                    </li>
                    <li>
                        <input className="style-detail-checkbox" id="color-bluewood-checkbox" type="checkbox" />

                        <label htmlFor="color-bluewood-checkbox">
                            <div className="color-swatch bg-bluewood" />
                            <div className="font-base">Bluewood</div>
                        </label>

                        <div className="style-detail">
                            <pre>#302c29</pre>
                            <pre>$color-bluewood</pre>
                            <pre>.bg-bluewood</pre>
                            <pre>.color-bluewood</pre>
                        </div>
                    </li>
                    <li>
                        <input className="style-detail-checkbox" id="color-valencia-checkbox" type="checkbox" />

                        <label htmlFor="color-valencia-checkbox">
                            <div className="color-swatch bg-valencia" />
                            <div className="font-base">Valencia</div>
                        </label>

                        <div className="style-detail">
                            <pre>#E74C3C</pre>
                            <pre>$color-valencia</pre>
                            <pre>.bg-valencia</pre>
                            <pre>.color-valencia</pre>
                        </div>
                    </li>
                    <li>
                        <input className="style-detail-checkbox" id="color-mariner-checkbox" type="checkbox" />

                        <label htmlFor="color-mariner-checkbox">
                            <div className="color-swatch bg-mariner" />
                            <div className="font-base">Mariner</div>
                        </label>

                        <div className="style-detail">
                            <pre>#1680de</pre>
                            <pre>$color-mariner</pre>
                            <pre>.bg-mariner</pre>
                            <pre>.color-mariner</pre>
                        </div>
                    </li>
                    <li>
                        <input className="style-detail-checkbox" id="color-porcelain-checkbox" type="checkbox" />

                        <label htmlFor="color-porcelain-checkbox">
                            <div className="color-swatch bg-porcelain" />
                            <div className="font-base">Porcelain</div>
                        </label>

                        <div className="style-detail">
                            <pre>#ffffff</pre>
                            <pre>$color-porcelain</pre>
                            <pre>.bg-porcelain</pre>
                            <pre>.color-porcelain</pre>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Colors;
