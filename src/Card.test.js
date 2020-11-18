import React from 'react';
import ReactDOM from 'react-dom';
import CardClass from './Card';
import renderer from 'react-test-renderer';


//test suite
describe('CardClass Component', () => {
    //smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CardClass />, div)
        ReactDOM.unmountComponentAtNode(div);
    });

    //snapshot test
    it('renders the UI as expected' , () => {
        const tree = renderer
            .create(<CardClass key="a" card="First card" content="lorem ipsum" />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });

    //second snapshot test
    it('renders the UI as expected' , () => {
        const tree = renderer
            .create(<CardClass key="g" card="Seventh card" content="lorem ipsum" />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });
})