import React, { useState, useEffect, useReducer } from 'react';

function seededRandom(seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
}

function fetchAPI(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
}

function submitAPI(formData) {
  return true; // Returning true to simulate success
}

// Function to initialize times
export function initializeTimes() {
  return {
    availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  };
}

// Reducer function for times
export function timesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return {
        ...state,
        availableTimes: action.payload, // Update availableTimes with the fetched times
      };
    default:
      return state;
  }
}

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    occasion: '',
    guests: '',
    date: '',
    time: ''
  });

  const [formError, setFormError] = useState({});
  const [availableTimes, dispatch] = useReducer(timesReducer, {}, initializeTimes);

  const onChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    if (formData.date) {
      const date = new Date(formData.date);
      const times = fetchAPI(date); // API call to fetch times
      dispatch({ type: 'UPDATE_TIMES', payload: times });
    }
  }, [formData.date]);

  const validateForm = () => {
    let err = {};

    if (formData.name === '') {
      err.name = '* Full name required!';
    }
    if (formData.email === '') {
      err.email = '* Email required!';
    } else {
      const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(formData.email)) {
        err.email = 'Email not valid!';
      }
    }

    if (formData.telephone === '') {
      err.telephone = '* Phone number is required!';
    } else {
      const phoneRegex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[-./\s]?)?((?:\(?\d{1,}\)?[-./\s]?)+)(?:[-./\s]?(?:#|ext\.?|extension|x)[-./\s]?(\d+))?$/i;
      if (!phoneRegex.test(formData.telephone)) {
        err.telephone = 'Phone number is not valid!';
      }
    }

    if (formData.guests === '' || parseInt(formData.guests) <= 0) {
      err.guests = '* Please specify at least one guest!';
    }
    
    if (formData.date === '') {
      err.date = '* Please specify the date!';
    } else {
      // Validate if the selected date is in the past
      const selectedDate = new Date(formData.date);
      const now = new Date();
      now.setHours(0, 0, 0, 0); // Clear time for today's date comparison
      if (selectedDate < now) {
        err.date = '* Date cannot be in the past!';
      }
    }
    
    if (formData.time === '') {
      err.time = '* Please select a time!';
    }

    setFormError(err);
    return Object.keys(err).length === 0;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const success = submitAPI(formData); // API call to submit form
      if (success) {
        alert('Reservation successfully submitted');
      } else {
        alert('Reservation submission failed');
      }
    }
  };

  return (
    <div className="reservations-background">
      <div className="reservations-container">
        <div className="form-container">
          <h1>Reserve a Table</h1>
          <p>Please fill the form to complete your reservation.</p>
          <form onSubmit={onSubmitHandler}>
            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                name="name"
                onChange={onChangeHandler}
              />
              <span className="non-valid">{formError.name}</span>
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="text@email.com"
                name="email"
                onChange={onChangeHandler}
              />
              <span className="non-valid">{formError.email}</span>
            </div>
            <div className="field">
              <label htmlFor="telephone">Phone Number</label>
              <input
                type="tel"
                placeholder="+43000000000"
                name="telephone"
                onChange={onChangeHandler}
              />
              <span className="non-valid">{formError.telephone}</span>
            </div>
            <div className="guestsdate">
              <div className="field field-occasion">
                <label htmlFor="occasion">Occasion (optional)</label>
                <select name="occasion" className="options" onChange={onChangeHandler}>
                  <option value="select">Select occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="engagement">Engagement</option>
                  <option value="anniversary">Anniversary</option>
                </select>
              </div>
              <div className="field field-guests">
                <label htmlFor="guests">Guests</label>
                <input
                  type="number"
                  placeholder="0"
                  name="guests"
                  onChange={onChangeHandler}
                  className="guests"
                />
                <span className="non-valid">{formError.guests}</span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                onChange={onChangeHandler}
              />
              <span className="non-valid">{formError.date}</span>
            </div>
            <div className="field">
              <label htmlFor="time">Time</label>
              <select name="time" class= "options" onChange={onChangeHandler}>
                <option value="">Select time</option>
                {availableTimes.availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <span className="non-valid">{formError.time}</span>
            </div>
            <button type="submit">Reserve</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
