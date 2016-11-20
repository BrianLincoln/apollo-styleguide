import React from 'react';
import './styles.scss';

const Fonts = () => {
    return (
        <section className="col-lg-4">
            <div className="card col-xs-12">
                <h2 className="card-heading">Type</h2>
                <ul className="fontlist">
                    <li>
                        <input className="style-detail-checkbox" id="font-title-lg-checkbox" type="checkbox" />
                        <label className="font-name font-title-lg" htmlFor="font-title-lg-checkbox">Title Large</label>
                        <div className="style-detail">
                            <pre>responsive: 35px, 53px</pre>
                            <pre>.font-title-lg</pre>
                        </div>
                    </li>
                    <li>
                        <input className="style-detail-checkbox" id="font-title-md-checkbox" type="checkbox" />
                        <label className="font-name font-title-md" htmlFor="font-title-md-checkbox">Title Medium</label>
                        <div className="style-detail">
                            <pre>.font-title-md</pre>
                        </div>
                    </li>
                    <li>
                        <input className="style-detail-checkbox" id="font-title-sm-checkbox" type="checkbox" />
                        <label className="font-name font-title-sm" htmlFor="font-title-sm-checkbox">Title Small</label>
                        <div className="style-detail">
                            <pre>.font-title-sm</pre>
                        </div>
                    </li>
                    <li>
                        <input className="style-detail-checkbox" id="font-base-checkbox" type="checkbox" />
                        <label className="font-name font-base" htmlFor="font-base-checkbox">Base</label>
                        <div className="style-detail">
                            <pre>.font-base</pre>
                        </div>
                    </li>
                    <li>
                        <input className="style-detail-checkbox" id="font-base-alt-checkbox-checkbox" type="checkbox" />
                        <label className="font-name font-base-alt" htmlFor="font-base-alt-checkbox">Base Alt</label>
                        <div className="style-detail">
                            <pre>16px, arial, normal</pre>
                            <pre>.font-base-alt</pre>
                        </div>
                    </li>
                    <li>
                        <input className="style-detail-checkbox" id="font-sm-checkbox" type="checkbox" />
                        <label className="font-name font-sm" htmlFor="font-sm-checkbox">Small</label>
                        <div className="style-detail">
                            <pre>.font-sm</pre>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Fonts;
