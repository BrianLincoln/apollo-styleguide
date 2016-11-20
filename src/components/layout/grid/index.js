import React from 'react';
import './styles.scss';

const Grid = () => {
    return (
        <section className="space-bottom-xl">
            <h2 className="font-title-md space-bottom-md">Grid</h2>
            <section>
                <p className="font-lg space-bottom-md">Rows are divided into 12 columns. Elements use classes to define how many columns wide they are at each breakpoint.</p>
                <div className="row samplegrid">
                    <div className="col-md-6 col-lg-9 samplegrid-column">
                        <ul className="samplegrid-column-classes">
                            <li className="font-micro">.col-md-6</li>
                            <li className="font-micro">.col-lg-9</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 samplegrid-column">
                        <ul className="samplegrid-column-classes">
                            <li className="font-micro">.col-md-6</li>
                            <li className="font-micro">.col-lg-3</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-lg-4 samplegrid-column">
                        <ul className="samplegrid-column-classes">
                            <li className="font-micro">.col-md-2</li>
                            <li className="font-micro">.col-lg-4</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-lg-4 samplegrid-column">
                        <ul className="samplegrid-column-classes">
                            <li className="font-micro">.col-md-2</li>
                            <li className="font-micro">.col-lg-4</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-lg-4 samplegrid-column">
                        <ul className="samplegrid-column-classes">
                            <li className="font-micro">.col-md-2</li>
                            <li className="font-micro">.col-lg-4</li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-3 samplegrid-column">
                        <ul className="samplegrid-column-classes">
                            <li className="font-micro">.col-xs-12</li>
                            <li className="font-micro">.col-sm-3</li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-sm-3 samplegrid-column">
                        <ul className="samplegrid-column-classes">
                            <li className="font-micro">.col-xs-6</li>
                            <li className="font-micro">.col-sm-3</li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-sm-3 samplegrid-column">
                        <ul className="samplegrid-column-classes">
                            <li className="font-micro">.col-xs-6</li>
                            <li className="font-micro">.col-sm-3</li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-3 samplegrid-column">
                        <ul className="samplegrid-column-classes">
                            <li className="font-micro">.col-xs-12</li>
                            <li className="font-micro">.col-sm-3</li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-lg-1 samplegrid-column">
                        <ul className="samplegrid-column-classes">
                            <li className="font-micro">.col-xs-6</li>
                            <li className="font-micro">.col-lg-1</li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-lg-2 samplegrid-column">
                        <ul className="samplegrid-column-classes">
                            <li className="font-micro">.col-xs-6</li>
                            <li className="font-micro">.col-lg-2</li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-lg-3 samplegrid-column">
                        <ul className="samplegrid-column-classes">
                            <li className="font-micro">.col-xs-6</li>
                            <li className="font-micro">.col-lg-3</li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-lg-4 samplegrid-column">
                        <ul className="samplegrid-column-classes">
                            <li className="font-micro">.col-xs-6</li>
                            <li className="font-micro">.col-lg-4</li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-lg-5 samplegrid-column">
                        <ul className="samplegrid-column-classes">
                            <li className="font-micro">.col-xs-6</li>
                            <li className="font-micro">.col-lg-5</li>
                        </ul>
                    </div>

                </div>
            </section>
        </section>
    );
};

export default Grid;
