import React from 'react';
import './About.scss';

const About = ({props}) => (
      <div className="row about">
        <div className="col-md-4">
          <img src="https://htmlstream.com/preview/space-v1.0.1/assets/svg/components/trophy-purple-icon.svg" />
          <h3 className="text-center">Professional Design</h3>
          <p className="text-center">Achieve virtually any look and layout from within the one template.</p>    
        </div>
        <div className="col-md-4">
         <img src="https://htmlstream.com/preview/space-v1.0.1/assets/svg/components/idea-primary-icon.svg" />
         <h3 className="text-center">Super-Light</h3>
         <p className="text-center">Manage document assembly with sophisticated yet super-light templates.</p>    
        </div>
        <div className="col-md-4">
          <img src="https://htmlstream.com/preview/space-v1.0.1/assets/svg/components/rocket-red-icon.svg" />
          <h3 className="text-center">Unlimited Power</h3>
          <p className="text-center">Find what you need in one template and combine features at will.</p>    
        </div>
      </div>   
);

export default About;