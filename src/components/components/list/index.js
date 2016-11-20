import React from 'react';
import './styles.scss';

const List = () => {
    return (
        <section className="space-bottom-xl">
            <h2 className="font-title-md space-bottom-md">Lists</h2>
            <div className="row">

                <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card col-xs-12">
                        <h3 className="card-heading">Stacked List Items</h3>
                        <div className="list-group">
                            <div className="list-item_stacked">
                                <label className="list-item-label">class</label>
                                <span className="list-item-value"><code>.list-item_stacked</code></span>
                            </div>
                            <div className="list-item_stacked">
                                <label className="list-item-label">Label</label>
                                <span className="list-item-value">Value</span>
                            </div>
                            <div className="list-item_stacked">
                                <label className="list-item-label">Name</label>
                                <span className="list-item-value">Zack Morris</span>
                            </div>
                            <div className="list-item_stacked">
                                <label className="list-item-label">Email</label>
                                <span className="list-item-value">zackattack@morris.com</span>
                            </div>
                            <div className="list-item_stacked">
                                <label className="list-item-label">Phone</label>
                                <span className="list-item-value">(607) 867-5309</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-lg-4">
                    <div className="card col-xs-12">
                        <h3 className="card-heading">Lists with custom content</h3>
                        <div className="list-group">
                            <div className="list-item row">
                                <div className="show-sm col-sm-4 col-md-3 col-lg-4">
                                    <img className="thumbnail-example-image" src="http://placekitten.com/g/300/300" />
                                </div>
                                <div className="col-xs-12 col-sm-8 col-md-9 col-lg-8">
                                    <div className="font-title-md">Grids in a list</div>
                                    <p>An example of a grid being used within a list.</p>
                                </div>
                            </div>
                            <div className="list-item row">
                                <div className="show-sm col-sm-4 col-md-3 col-lg-4">
                                    <img className="thumbnail-example-image" src="http://placekitten.com/300/300" />
                                </div>
                                <div className="col-xs-12 col-sm-8 col-md-9 col-lg-8">
                                    <div className="font-title-md">Grids in a list</div>
                                    <p>An example of a grid being used within a list.</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="align-center font-title-md space-bottom-lg space-top-lg">You can put any content you want here.</div>
                                <div className="button-group space-bottom-lg">
                                    <a className="button button_mariner">even a button</a>
                                </div>
                            </div>
                            <div className="list-item row">
                                <div className="show-sm col-sm-4 col-md-3 col-lg-4">
                                    <img className="thumbnail-example-image" src="http://placekitten.com/g/300/300" />
                                </div>
                                <div className="col-xs-12 col-sm-8 col-md-9 col-lg-8">
                                    <div className="font-title-md">Grids in a list</div>
                                    <p>An example of a grid being used within a list.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default List;
