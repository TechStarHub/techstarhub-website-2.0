import React, { useEffect } from 'react';
import BaseLayout from '../layouts/base';

export default function Projects() {
  useEffect(() => {
    fetch('https://api.github.com/orgs/TechStarHub/repos')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <BaseLayout>
      <h1>Projects</h1>
      <div>Projects</div>
    </BaseLayout>
  );
}
