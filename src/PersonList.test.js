import React from 'react';
import Renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import PersonList from './PersonList'
import mockAxios from 'axios';

jest.mock('axios');
mockAxios.get.mockImplementation(async () => {});

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})
afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
});

xit('Renders without throwing', () => {
    let component;
    Renderer.act(() => {
        component = Renderer.create(<PersonList />);
    });
    const componentJson = component.toJSON();

    expect(componentJson).toMatchSnapshot();
});

xit("displays loading message", () => {
    const fakePeople = [
        { name: 'John' },
        { name: 'Mary' },
        { name: 'Monica' }
    ]

    mockAxios.get.mockResolvedValueOnce(fakePeople);
    
    act(() => {
        ReactDOM.render(<PersonList />, container);
    });

    expect(container.textContent).toBe('The site is loading...');
});

it("displays error message", async () => {
    const errorMessage = 'We found the folowing error: 404 not found.';

    mockAxios.get.mockRejectedValueOnce(new Error(errorMessage));
    
    act(() => {
        ReactDOM.render(<PersonList />, container);
    });

    await expect(() => mockAxios.get('')).toThrow('404 not found.');
});

// Tests
// https://jestjs.io/docs/en/mock-function-api#mockfnmockrejectedvalueoncevalue
// https://jestjs.io/docs/en/expect.html#tothrowerror

// Mocks
// https://jestjs.io/docs/en/expect.html#tothrowerror
// https://jestjs.io/docs/en/mock-functions.html#mocking-modules