import React from 'react';

const Subscription = () => {
  return (
    <div className="subscription-container">
      <h1 className="subscription-title">Subscription Plans</h1>
      <p className="subscription-description">Choose the plan that suits you best.</p>
      <div className="plans">
        <div className="plan">
          <h2 className="plan-title">Basic</h2>
          <p className="plan-price">$10/month</p>
          <p className="plan-features">Includes basic features</p>
        </div>
        <div className="plan">
          <h2 className="plan-title">Premium</h2>
          <p className="plan-price">$20/month</p>
          <p className="plan-features">Includes all features</p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
