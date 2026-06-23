import React from 'react';

export function Subscription() {
  return (
    <div className="subscription-container">
      <h1 className="subscription-title">Subscription</h1>
      <p className="subscription-description">Choose your plan and enjoy our services.</p>
      <div className="subscription-plans">
        <div className="plan">
          <h2 className="plan-title">Basic Plan</h2>
          <p className="plan-price">$9.99/month</p>
          <button className="plan-button">Subscribe</button>
        </div>
        <div className="plan">
          <h2 className="plan-title">Premium Plan</h2>
          <p className="plan-price">$19.99/month</p>
          <button className="plan-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
