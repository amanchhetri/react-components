import { Dropdown } from "../Components";

export default {
    title: 'Dropdown',
    component: Dropdown,
    argTypes: {
        data: { control: '' }
    },
}

const Template = (args) => <Dropdown {...args} />

export const Simple = Template.bind({});
Simple.args = {
    data: ['A', 'B', 'C', 'D']
}

export const Default = Template.bind({});
Default.args = {
    
}

// export const Dropdown2 = Template.bind({});