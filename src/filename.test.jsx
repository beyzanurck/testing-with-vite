
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App.jsx';
import Header from './components/header.jsx';
import Item from './components/item.jsx';
import Form from './components/item.jsx';

describe("Header Component", () => {

    test("should render the Header component", () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId("header")).toBeDefined();
    });

})

describe("Item Component", () => {

    test("should render the item correctly", () => {

        const mockItem = { text: 'Item 1' };

        const {getByText} = render(<Item item={mockItem} />);
        expect(getByText("Item 1")).toBeDefined();
    });

    test("should render the items correctly", () => {

        const mockItems = [
            { text: 'Item 1' },
            { text: 'Item 2' },
            { text: 'Item 3' },
        ];

        mockItems.forEach((item) => {
            const {getByText} = render(<Item item={item} />);
            expect(getByText(item.text)).toBeDefined();
        });
    });
    
})

describe("Form Component", () => {

    test("should render the Form component", () => {
        const { getByTestId } = render(<Form addItem={() => {}} />);
        expect(getByTestId("form")).toBeDefined();
    });

})