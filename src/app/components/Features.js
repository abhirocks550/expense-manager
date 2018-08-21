import React from 'react';
import './Features.scss';

const Features = ({props}) => (
      <div className="row bg">
        <div className="col-md-12">
            <h3 className="title">MAKE WISER SPENDING DECISIONS</h3>
            <p>Expense Manager helps you see all your accounts at one place, 
                  understand where your money goes, 
                  reduce unwanted spending, track investments, 
                  and save for future goals.</p>
            <button className="btn btn-lg btn-success">
             Get Started
            </button>      
        </div>
      </div>   
);

export default Features;