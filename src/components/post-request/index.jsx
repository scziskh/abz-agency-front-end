import styled from 'styled-components';
import { useGetPositionsQuery } from '../../redux/users-api';
import { FormProvider, useForm } from 'react-hook-form';
import InputDefault from '../form/input.default';
import InputFile from '../form/input.file';
import InputRadio from '../form/input.radio';
import InputSubmit from '../form/input.submit';
import Preloader from '../preloader';

const PostRequest = () => {
  const { data, isLoading } = useGetPositionsQuery();

  const methods = useForm();

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Wrapper>
      <h1> Working with POST request</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit()}>
          <InputDefault type={`text`} placeholder={`Your name`} name={`name`} />
          <InputDefault type={`email`} placeholder={`Email`} name={`email`} />
          <InputDefault type={`text`} placeholder={`Phone`} name={`phone`} />
          <div>
            <RadioHeader>Select your position</RadioHeader>
            <RadioGroup>
              {data.positions.map(({ name, id }) => (
                <InputRadio
                  key={id}
                  label={name}
                  id={`position_${id}`}
                  name={`position`}
                />
              ))}
            </RadioGroup>
          </div>
          <DivFile>
            <InputFile
              upload={`Upload`}
              fileName={`Upload your photo`}
              name={`upload-photo`}
            />
          </DivFile>
          <InputSubmit name={`Sign up`} />
        </form>
      </FormProvider>
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
