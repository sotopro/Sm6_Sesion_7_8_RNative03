import React from 'react';
import { EmployeeList } from '../employee-list';
import { Heading } from '../heading';


const  Home = () => {

  return (
      <>
        <div className="container mx-auto">
            <Heading />
            <EmployeeList />
        </div>
      </>
  );
}

export default Home;
