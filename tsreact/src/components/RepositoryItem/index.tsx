import React from 'react';

import { Repository } from '../../store/ducks/repositories/types';
import './styles.css';

interface OwnProps {
  repository: Repository
}

export default function RepositoryItem({ repository }: OwnProps) {
  return (
    <li className="item">{repository.name}</li>
  );
}
