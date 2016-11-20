import React from 'react';
import Colors from './colors';
import Spacing from './spacing';
import Fonts from './fonts';

const Foundation = () => {
    return (
        <div className="container space-bottom-xl">
            <h1 className="align-center font-title-lg space-bottom-xl space-top-xl">Foundation</h1>        
            <section className="row">
                <Fonts />
                <Colors />
                <Spacing />
            </section>
        </div>
    );
};

export default Foundation;
