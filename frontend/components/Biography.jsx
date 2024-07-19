import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="About Us" />
      </div>
      <div className="content">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          At HealthCare Clinic, we are dedicated to providing top-notch medical
          care with a personal touch. Our team of highly skilled doctors and
          medical professionals are here to offer comprehensive treatment
          options for a wide range of health conditions.
        </p>
        <p>Our team includes specialists in various fields, including:</p>
        <ul>
          <li>Cardiology - Expert care for heart-related issues.</li>
          <li>
            Orthopedics - Comprehensive treatment for bone and joint problems.
          </li>
          <li>Neurology - Advanced care for neurological disorders.</li>
          <li>Oncology - Compassionate cancer treatment and support.</li>
          <li>Pediatrics - Specialized care for children.</li>
          <li>Dermatology - Expert treatment for skin conditions.</li>
        </ul>
        <p>
          Our clinic is equipped with state-of-the-art facilities and technology
          to ensure that our patients receive the best possible care. We are
          committed to improving the quality of life for our patients through
          personalized treatment plans and compassionate care.
        </p>
        <p>
          In 2024, we are expanding our services to include new and innovative
          treatments, ensuring that we stay at the forefront of medical
          advancements. Whether you need a routine check-up or specialized care,
          our team is here to assist you.
        </p>
        <p>
          Our doctors are not only experts in their respective fields but also
          passionate about making a difference in the lives of their patients.
          We believe in a holistic approach to healthcare, addressing both
          physical and emotional well-being.
        </p>
        <p>
          For more information about our services or to schedule an appointment,
          please contact us. We look forward to serving you and your family with
          dedication and excellence.
        </p>
      </div>
    </div>
  );
};

export default Biography;
