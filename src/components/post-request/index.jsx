import styled from 'styled-components';
import { useGetPositionsQuery } from '../../redux/users-api';
import { useForm } from 'react-hook-form';
import Button from '../form/button.default';
import InputDefault from '../form/input.default';
import InputFile from '../form/input.file';
import InputRadio from '../form/input.radio';
import Preloader from '../preloader';

const PostRequest = () => {
  const { data, isLoading } = useGetPositionsQuery();

  const { register } = useForm();

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Wrapper>
      <h1> Working with POST request</h1>
      <form>
        <InputDefault
          {...register('name', { required: true })}
          type="text"
          placeholder="Your name"
        />
        <InputDefault
          {...register('email', { required: true })}
          type="email"
          placeholder="Email"
        />
        <InputDefault
          {...register('phone', { required: true })}
          type="text"
          placeholder="Phone"
        />
        <div>
          <RadioHeader>Select your position</RadioHeader>
          <RadioGroup>
            {data.positions.map(({ name, id }) => (
              <InputRadio
                key={id}
                {...register('position', { required: true })}
                label={name}
                id={`position_${id}`}
              />
            ))}
          </RadioGroup>
        </div>
        <DivFile>
          <InputFile 
                {...register('photo', { required: true })}upload="Upload" fileName="Upload your photo" />
        </DivFile>
        <Button name="Sign up" />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h1 {
    margin: 139px 0 0px;
    text-align: center;
  }
  form {
    width: 380px;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    button {
      margin: -1px auto;
    }
  }
  @media (max-width: 480px) {
    width: 330px;
    margin: 0 auto;
    form {
      width: 330px;
    }
  }
`;

const RadioHeader = styled.p`
  margin: -7px 0 1px;
`;

const RadioGroup = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  padding: 6px 0;
`;

const DivFile = styled.div`
  margin-top: -12px;
`;

export default PostRequest;
