import React from 'react';


export const SubscribeSection = () => {
  return (
    <div className="section">
      <div className="bck-img">
        <div className="Footersubscribe">
          <h2>SUBSCRIBE</h2>
          <span className="newsletter">Sign-up to our newsletter</span>
        </div>
        <span className="email">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Your email"
          />
        </span>
        <button type="submit" className="submit">SUBMIT</button>
      </div>
    </div>
  );
};

 