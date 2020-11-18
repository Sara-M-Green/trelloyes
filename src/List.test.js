import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ListClass from './List';
import CardsClass from './Card';

//test suite
describe('ListClass Componenet', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ListClass key='1' header='First list' cards={[ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ]} />, div)
        ReactDOM.unmountComponentAtNode(div);
    });

    //snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<ListClass key='2' header='Second list' cards={['b', 'c', 'd', 'f', 'h', 'i', 'k']} />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });
})