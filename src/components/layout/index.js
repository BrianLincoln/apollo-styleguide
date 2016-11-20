import React from 'react';
import Breakpoints from './breakpoints';
import Container from './container';
import Grid from './grid';

const Layout = () => {
    return (
        <section className="space-bottom-xl">
            <section className="container">
                <h1 className="align-center font-title-lg space-top-lg space-bottom-xl">Layout</h1>
            </section>
            <Container />
            <section className="container">
                <Breakpoints />
                <Grid />
            </section>
        </section>
    );
};

export default Layout;
