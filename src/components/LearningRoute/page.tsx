'use client'
import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter hook from Next.js
import { Button } from 'antd';

const LearningRoutes = () => {
  const router = useRouter(); // Hook to access Next.js router

  // Handle button click to navigate to '/team'
  const handleClick = () => {
    router.push('/team'); // Navigate to the '/team' route
  };

  return (
    <div>
      <h1>Learning Routes</h1>
      <Button onClick={handleClick}>Go to Team Page</Button>
    </div>
  );
};

export default LearningRoutes;
