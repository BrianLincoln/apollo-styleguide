import React from 'react';
import Card from './card';
import Button from './button';
import ButtonGroup from './button-group';
import List from './list';

const Layout = () => {
    return (
        <section>
            <section className="container">
                <h1 className="align-center font-title-lg space-top-lg space-bottom-xl">Components</h1>
                <Card />
                <Button />
                <ButtonGroup />
                <List />
            </section>
        </section>
    );
};

export default Layout;
