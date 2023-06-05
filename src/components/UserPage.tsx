import { useParams } from 'react-router-dom';
import DetailsPage from '../pages/DetailsPage';

export default function UserPage() {
  const { id } = useParams();

  return (
    <DetailsPage endpoint={`/posts/${id}`} heading={`${id}'s Page`}/>
  );
}