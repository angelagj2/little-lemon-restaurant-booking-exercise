import { render, screen } from "@testing-library/react";
import BookingForm, { initializeTimes, timesReducer } from './BookingForm';

// Test for the BookingForm heading
test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});

// Test for initializeTimes function
test('initializeTimes returns the correct default times', () => {
  const initialState = initializeTimes();
  expect(initialState.availableTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

// Test for updateTimes in the reducer
test('updateTimes returns the updated state', () => {
  const previousState = { availableTimes: ['17:00', '18:00'] };
  const action = { type: 'UPDATE_TIMES', payload: ['19:00', '20:00'] };
  const newState = timesReducer(previousState, action);
  expect(newState.availableTimes).toEqual(['19:00', '20:00']);
});
