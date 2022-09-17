import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Routing from 'routes'

const TestNav: React.FC = () =>
  <div>/test page</div>;

const Template: React.FC = () => {
  return (
    <div>
      <nav>
        <Routes>
          <Route path="/"/>
        </Routes>
      </nav>

      <Routing/>
    </div>
  );
};

export default Template;