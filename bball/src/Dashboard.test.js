import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import { render, fireEvent, getAllByTestId } from 'react-testing-library'; // aded this
import 'jest-dom/extend-expect'; // added this

describe('<Dashboard/>', () => {
  it('renders without crashing', () => {
    const helpers = render(<Dashboard />);
  });

  it('renders "Dashboard', () => {
    const { getByText } = render(<Dashboard />);

    const text = getByText(/Dashboard/i);

    expect(text).toBeInTheDocument();
  });

  it('renders Display', () => {
    const { getByText } = render(<Dashboard/>);

    const text = getByText(/Strikes/i);
    fireEvent.click(text);

    expect(getByText(/0/i)).toBeInTheDocument();
  });

  // buttons testing

  test('foul button work correctly', () => {
    const DashboardComponent = render(<Dashboard />)

    const foulButton = DashboardComponent.getByTitle('foul');
    const strikeCount = DashboardComponent.getByTitle('strikes');

    fireEvent.click(foulButton);
    expect(strikeCount).toHaveTextContent(1)

    fireEvent.click(foulButton);
    expect(strikeCount).toHaveTextContent(2)
  });

  test('strike button work correctly', () => {
    const DashboardComponent = render(<Dashboard />)

    const strikeButton = DashboardComponent.getByTitle('strike');
    const strikeCount = DashboardComponent.getByTitle('strikes');

    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    expect(strikeCount).toHaveTextContent(1)
  });

  test('ball button work correctly', () => {
    const DashboardComponent = render(<Dashboard />)

    const ballButton = DashboardComponent.getByTitle('ball');
    const ballCount = DashboardComponent.getByTitle('balls');
    const strikeCount = DashboardComponent.getByTitle('strikes');


    fireEvent.click(ballButton);
    expect(ballCount).toHaveTextContent(1)

    fireEvent.click(ballButton);
    expect(ballCount).toHaveTextContent(2)

    fireEvent.click(ballButton);
    expect(ballCount).toHaveTextContent(3)

    fireEvent.click(ballButton);
    expect(ballCount).toHaveTextContent(0)
    expect(strikeCount).toHaveTextContent(0)
  });
});
