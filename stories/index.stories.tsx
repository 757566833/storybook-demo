import React from 'react';
import ColorPicker from './index';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const componentMeta:ComponentMeta<typeof ColorPicker> = {
    title: 'Components/common/ColorPicker',
    component: ColorPicker,
};
export default componentMeta;
export const Demo: ComponentStory<typeof ColorPicker> = (args)=>{
    const [color, setColor] = React.useState('#000000');
    return (<div>
            <ColorPicker {...args} value={color} onChange={setColor} >
                <svg
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="45653"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="14"
                    height="14"
                >
                    <defs>
                        <style type="text/css"></style>
                    </defs>
                    <path
                        d="M904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zM253.7 736h85c4.2 0 8-2.7 9.3-6.8l53.7-166h219.2l53.2 166c1.3 4 5 6.8 9.3 6.8h89.1c1.1 0 2.2-0.2 3.2-0.5 5.1-1.8 7.8-7.3 6-12.4L573.6 118.6c-1.4-3.9-5.1-6.6-9.2-6.6H462.1c-4.2 0-7.9 2.6-9.2 6.6L244.5 723.1c-0.4 1-0.5 2.1-0.5 3.2-0.1 5.3 4.3 9.7 9.7 9.7z m255.9-516.1h4.1l83.8 263.8H424.9l84.7-263.8z"
                        p-id="45654"></path>
                </svg></ColorPicker>
        </div>
    );
};