import React from 'react';
import './styles.scss';

const Container = () => {
    return (
        <section className="container-example-wrapper space-bottom-xl">
            <div className="container">
                <h2 className="font-title-md space-bottom-md">Container</h2>
                <p className="font-lg space-bottom-md">Elements in a <code>.container</code> class will have a max-width of the largest breakpoint. Without it, the element will fill the full width of the site.</p>
                <div className="container-example">This element has a <code>.container</code> class.</div>
            </div>
            <div className="container-example space-bottom-md">This element does NOT have a <code>.container</code> class.</div>
        </section>
    );
};

export default Container;
