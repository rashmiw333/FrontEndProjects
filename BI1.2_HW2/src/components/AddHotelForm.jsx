import React, { useState } from "react";

const AddHotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "checkbox"? checked: name === "rating"? Number(value): value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const hotelData = {
      ...formData,
      category: [formData.category],
      amenities: formData.amenities .split(",").map((item) => item.trim()),
      photos: formData.photos.split(",").map((item) => item.trim()),
    };

    try {
      const response = await fetch("https://backend-hotels-psi.vercel.app/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hotelData),
      });

      if (!response.ok) {
        throw "Failed to add hotel";
      }

      const data = await response.json();
      console.log("Hotel Added:", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add New Hotel</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Budget">Budget</option>
          <option value="Mid-Range">Mid-Range</option>
          <option value="Luxury">Luxury</option>
          <option value="Boutique">Boutique</option>
          <option value="Resort">Resort</option>
          <option value="Other">Other</option>
        </select>
        <br />

        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <br />

        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          min="0"
          max="5"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />

        <label>Website:</label>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
        <br />

        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
           maxLength={10}
        />
        <br />

        <label>Check-In Time:</label>
        <input
          type="text"
          name="checkInTime"
          value={formData.checkInTime}
          onChange={handleChange}
        />
        <br />

        <label>Check-Out Time:</label>
        <input
          type="text"
          name="checkOutTime"
          value={formData.checkOutTime}
          onChange={handleChange}
        />
        <br />

        <label>Amenities:</label>
        <textarea
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
        />
        <br />

        <label>Price Range:</label>
        <select
          name="priceRange"
          value={formData.priceRange}
          onChange={handleChange}
        >
          <option value="">Select Price Range</option>
          <option value="$$ (11-30)">$$ (11-30)</option>
          <option value="$$$ (31-60)">$$$ (31-60)</option>
          <option value="$$$$ (61+)">$$$$ (61+)</option>
          <option value="Other">Other</option>
        </select>
        <br />

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="reservationsNeeded"
            checked={formData.reservationsNeeded}
            onChange={handleChange}
          />
          Reservations Needed
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="isParkingAvailable"
            checked={formData.isParkingAvailable}
            onChange={handleChange}
          />
          Parking Available
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="isWifiAvailable"
            checked={formData.isWifiAvailable}
            onChange={handleChange}
          />
          WiFi Available
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="isPoolAvailable"
            checked={formData.isPoolAvailable}
            onChange={handleChange}
          />
          Pool Available
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="isSpaAvailable"
            checked={formData.isSpaAvailable}
            onChange={handleChange}
          />
          Spa Available
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="isRestaurantAvailable"
            checked={formData.isRestaurantAvailable}
            onChange={handleChange}
          />
          Restaurant Available
        </label>

        <label>Photos:</label>
        <textarea
          name="photos"
          value={formData.photos}
          onChange={handleChange}
        />
<br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddHotelForm;
