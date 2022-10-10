
import React from 'react';

import AppNavbar from "main/components/Nav/AppNavbar";

export default {
    title: 'components/Nav/AppNavbar',
    component: AppNavbar
};


const Template = (args) => {
    return (
        <AppNavbar {...args} />
    )
};

export const defaultNavBar = Template.bind({});


