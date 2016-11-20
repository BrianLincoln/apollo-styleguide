import React from 'react';
import './styles.scss';

const Card = () => {
    return (
        <section className="space-bottom-xl">
            <h2 className="font-title-md space-bottom-md">Generic Cards</h2>
            <p className="font-lg space-bottom-md">Cards are used to wrap content in a box.</p>
            <section className="card">
                <p><code>.card</code> is used to put content in a container. Cards have a padding of <code>$space-lg</code> and margin-bottom  of <code>$space-md</code></p>
            </section>
            <section className="card">
                <h2 className="card-heading">Card Heading</h2>
                <p>Use <code>.card-heading</code> for card headings. They use <code>$font-title-md</code>, padding-bottom of <code>$space-sm</code>, a bottom border, and margin-bottom of <code>$space-lg</code></p>
            </section>
            <section className="row equal-height">
                <div className="col-xs-12 col-lg-4 ">
                    <div className="card col-xs-12">
                        <h2 className="card-heading">Cards in a grid</h2>
                        <p>I am on a grid.</p>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-4">
                    <div className="card col-xs-12">
                        <h2 className="card-heading">Devs take note</h2>
                        <p>Take a look at the nested col-* classes on these elements. Without them the cards would have no space between them.</p>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-4">
                    <div className="card col-xs-12">
                        <h2 className="card-heading">Cards in a grid</h2>
                        <p>I am on a grid.</p>
                        <img className="card-image-example" src="" />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Card;
