import React from 'react';
import { shallow } from 'enzyme';

import Template from './blog-post';
import {
    frontmatterPropType,
    sitePropType,
    imagePropType,
    markdownRemarkPropType,
} from '../../test/fixtures';

describe('blog', () => {
    test('rendering', () => {
        const renderProps = {
            data: {
                site: sitePropType,
                markdownRemark: {
                    ...frontmatterPropType,
                },
                indexCover: {
                    sizes: imagePropType,
                },
            },
        };
        const wrapper = shallow(<Template {...renderProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
