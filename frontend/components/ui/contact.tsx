/*import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-8 rounded-lg shadow-lg">
      {}
      <div className="bg-green-600 text-white p-8 md:w-1/3 rounded-lg flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="text-sm mb-6">We're here to help you</p>

        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Phone className="text-white" size={24} />
            <div>
              <p className="text-sm font-semibold">PHONE</p>
              <p className="text-sm">000000000</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="text-white" size={24} />
            <div>
              <p className="text-sm font-semibold">EMAIL</p>
              <p className="text-sm">000000000</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="text-white" size={24} />
            <div>
              <p className="text-sm font-semibold">LOCATION</p>
              <p className="text-sm">000000000</p>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="p-8 md:w-2/3 bg-white rounded-lg">
        <h2 className="text-3xl font-bold mb-2">Let's talk</h2>
        <p className="text-green-600 mb-6">Feel free to drop us a line below</p>

        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
          <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded-md" />
          <textarea placeholder="Message" className="w-full p-3 border rounded-md h-28"></textarea>
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
*/
"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8084/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Error submitting form!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-8 rounded-lg shadow-lg">
      {/* Contact Details */}
      <div className="bg-green-600 text-white p-8 md:w-1/3 rounded-lg flex flex-col justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.3011723356056!2d80.7721401!3d6.7197968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae38b000fa4533f%3A0x4203a37585095e01!2sMedixmart%20Pharmacy%20Belihuloya!5e0!3m2!1sen!2slk!4v1739049534186!5m2!1sen!2slk"
        width="400"
        height="400"
        style={{ border: 0 }} 
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

        <h2 className="text-2xl font-bold mb-2 mt-4">Contact Us</h2>
        <p className="text-sm mb-6">We're here to help you</p>

        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Phone className="text-white" size={24} />
            <div>
              <p className="text-sm font-semibold">PHONE</p>
              <p className="text-sm">+(94) 75 698 2000</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="text-white" size={24} />
            <div>
              <p className="text-sm font-semibold">EMAIL</p>
              <p className="text-sm">medixmartpharmacy@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="text-white" size={24} />
            <div>
              <p className="text-sm font-semibold">LOCATION</p>
              <p className="text-sm">Bellihuloya, Galagama</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="p-8 md:w-2/3 bg-white rounded-lg">
        <h2 className="text-3xl font-bold mb-2">Let's talk</h2>
        <p className="text-green-600 mb-6">Feel free to drop us a line below</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded-md"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded-md"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 border rounded-md"
          />

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-3 border rounded-md h-28"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
