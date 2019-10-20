import React from 'react';
import Renderer from 'react-test-renderer';
import Button from './Button';

it('Button loads correctly',  () => {
    const render = Renderer.create(<Button text="SUBSCRIBE TO BASIC" />);
    const json = render.toJSON();

    expect(json).toMatchSnapshot();
});

it('Button has been clicked', () => {
    const render = Renderer.create(<Button text="SUBSCRIBE TO BASIC" />);
    const button = render.root.findByType('button');

    button.props.onClick();
    expect(button.props.children).toBe('PROCEED TO CHECKOUT')
});