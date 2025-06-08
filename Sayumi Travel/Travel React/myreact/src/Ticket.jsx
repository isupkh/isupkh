import React, { useState } from 'react'

function Ticket() {
    const [formData, setFormData] = useState({
        departureCity: '',
        destinationCity: '',
        flightType: 'One Way',
        travelers: '',
        departureDate: '',
        returnDate: '',
        nationality: '',
        travelClass: 'Business',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch('http://api.example.com', {
          method: 'POST',
          body: JSON.stringify({
            name: formData.departureCity,
            email: formData.destinationCity,
            phoneNumber: formData.flightType,
            country: formData.departureDate,
            message: formData. returnDate,
            national: formData.nationality,
            travel: formData.travelClass,
          }),
        });
        console.log(formData);
        alert('Flight booked!');
      };
    
      return (
        <>
        <div className="container mt-5 d-flex justify-content-center">
          <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '500px' }}>
            <h3 className="text-center mb-4 fw-bold">Flight Booking</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Departure City</label>
                <input
                  type="text"
                  className="form-control"
                  name="departureCity"
                  value={formData.departureCity}
                  onChange={handleChange}
                  placeholder="Enter departure city"
                />
              </div>
    
              <div className="mb-3">
                <label className="form-label">Destination City</label>
                <input
                  type="text"
                  className="form-control"
                  name="destinationCity"
                  value={formData.destinationCity}
                  onChange={handleChange}
                  placeholder="Enter destination city"
                />
              </div>
    
              <div className="mb-3">
                <label className="form-label">Flight Type</label>
                <select
                  className="form-select"
                  name="flightType"
                  value={formData.flightType}
                  onChange={handleChange}
                >
                  <option value="One Way">One Way</option>
                  <option value="Round Trip">Round Trip</option>
                </select>
              </div>
    
              <div className="mb-3">
                <label className="form-label">Number of Travelers</label>
                <input
                  type="number"
                  className="form-control"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  placeholder="e.g., 2"
                />
              </div>
    
              <div className="mb-3">
                <label className="form-label">Departure Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                />
              </div>
    
              <div className="mb-3">
                <label className="form-label">Return Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  disabled={formData.flightType === 'One Way'}
                />
              </div>
    
              <div className="mb-3">
                <label className="form-label">Nationality</label>
                <input
                  type="text"
                  className="form-control"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  placeholder="Your nationality"
                />
              </div>
    
              <div className="mb-4">
                <label className="form-label">Class</label>
                <select
                  className="form-select"
                  name="travelClass"
                  value={formData.travelClass}
                  onChange={handleChange}
                >
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                  <option value="First Class">First Class</option>
                </select>
              </div>
    
              <button type="submit" className="btn btn-danger w-100">
                Book Now
              </button>
            </form>
          </div>
        </div>
    
    </>
  )
}

export default Ticket
