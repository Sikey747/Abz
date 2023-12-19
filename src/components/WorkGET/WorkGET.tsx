import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Container from '../ui/Container/Container';
import './WorkGET.scss';
import Typography from '../ui/Typography/Typography';
import Card from '../Card/Card';
import { AnswerType, UsersType } from '../../../interfaces/interfaces';
import Button from '../ui/Button/Button';
import { getUsers } from '../../api/api';
import Preloader from '../ui/Preloader/Preloader';
import useStore from '../../store/store';

function WorkGET() {
  const [page, setPage] = useState<number>(1);
  const [users, setUser] = useState<UsersType[]>([]);
  const { serIsFinishForm, isFinishForm } = useStore();

  const { data, isLoading, error } = useQuery<AnswerType>({
    queryKey: ['users', page],
    queryFn: () => {
      return getUsers(page);
    },
  });

  useEffect(() => {
    if (isFinishForm) {
      setPage(1);
      serIsFinishForm(false);
    }
    if (page === 1 && data?.users) {
      return setUser([...data?.users]);
    }
    if (data?.users) {
      return setUser([...users, ...data?.users]);
    }
  }, [data, isFinishForm]);

  return (
    <>
      {isLoading && (
        <section>
          <Container className="container__preloader">
            <Preloader />
          </Container>
        </section>
      )}
      {error && (
        <section>
          <Container className="container__preloader">
            <p>{error.message}</p>
          </Container>
        </section>
      )}
      {data && (
        <section>
          <Container className="workGET">
            <Typography className="workGET__title" variant="h1" component="h1">
              Working with GET request
            </Typography>
            <div className="workGET__cards">
              {users.map((el) => {
                return (
                  <Card
                    key={el.name + el.phone}
                    name={el.name}
                    email={el.email}
                    phone={el.phone}
                    skill={el.position}
                    src={el.photo}
                  />
                );
              })}
            </div>
            <Button
              style={{
                display:
                  users.length >= (data?.total_users || 0) ? 'none' : 'block',
              }}
              onClick={() => setPage(page + 1)}
            >
              Show more
            </Button>
          </Container>
        </section>
      )}
    </>
  );
}

export default WorkGET;
