import React from 'react';

const Benefits = () => {
  return (
    <div className="container text-center my-5 pt-1">
      <h2 className="m-5">What Yoga Gives</h2>

      <div className="row justify-content-center">
        {[
          { icon: 'fa-hand-fist', text: 'Strength' },
          { icon: 'fa-arrows-spin', text: 'Flexibility' },
          { icon: 'fa-brain', text: 'Focus' },
          { icon: 'fa-heart', text: 'Calmness' },
          { icon: 'fa-bed', text: 'Better Sleep' },
          { icon: 'fa-face-smile', text: 'Happiness' },
          { icon: 'fa-lungs', text: 'Breath Control' },
          { icon: 'fa-bolt', text: 'Energy' },
          { icon: 'fa-heart-circle-check', text: 'Heart Health' },
        ].map((item, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card p-4 d-flex align-items-center justify-content-center">
              <i className={`fa-solid ${item.icon} fs-3 mb-2`}></i>
              <p className="mb-0">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
