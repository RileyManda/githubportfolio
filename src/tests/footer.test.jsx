import { describe,expect,test } from 'vitest';
import Footer from '../components/Footer';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// test suite
describe('Footer', () => {
    // footer should render correctly
  test('renders correctly', () => {
    const { container } = (<Footer />);
    expect(container).toMatchSnapshot();
  });
});
