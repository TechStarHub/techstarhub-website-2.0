import React, { useEffect, useState } from 'react';
import BaseLayout from '../layouts/base';
import Repos from '../components/Repos/Repos';

export default function ReposPage() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/TechStarHub/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);
  return (
    <BaseLayout>
      <Repos repos={repos} />
    </BaseLayout>
  );
}
