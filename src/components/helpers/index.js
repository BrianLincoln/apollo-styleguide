import React from 'react';
import ResponsiveVisibility from './responsive-visibility';

const Layout = () => {
    return (
        <section className="space-bottom-xl">
            <section className="container">
                <h1 className="align-center font-title-lg space-top-lg space-bottom-xl">Helpers</h1>
                <ResponsiveVisibility />
            </section>
        </section>
    );
};

export default Layout;
