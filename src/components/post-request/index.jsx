import styled from 'styled-components';
import { useGetPositionsQuery, useGetTokenQuery } from '../../redux/users-api';
import { FormProvider, useForm } from 'react-hook-form';
import InputDefault from '../form/input.default';
import InputFile from '../form/input.file';
import InputRadio from '../form/input.radio';
import InputSubmit from '../form/input.submit';
import Preloader from '../preloader';
import { postFormConfig } from '../../helpers/configs';

const PostRequest = () => {
  const { data: positionsData, isLoading } = useGetPositionsQuery();
  const { data: tokenData } = useGetTokenQuery();

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      position_id: '1',
    },
  });

  const { photo, ...queryParams } = methods.getValues();
  queryParams.photo = photo?.[0];
  queryParams.position_id = +queryParams.position_id;

  const onSubmit = async () => {
    // eslint-disable-next-line no-undef
    const formData = new FormData();
    formData.append('name', methods.getValues('name'));
    formData.append('email', methods.getValues('email'));
    formData.append('phone', methods.getValues('phone'));
    formData.append('position_id', +methods.getValues('position_id'));
    formData.append('photo', methods.getValues('photo')[0]);

    // for (const [name, value] of Object.entries(queryParams)) {
    //   formData.append(name, value);
    // }

    console.log(formData.getAll('photo'));
    const response = await fetch(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users',
      {
        method: 'POST',
        headers: { Token: tokenData.token },
        body: formData,
      },
    );

    if (response.ok) {
      return await response.json();
    }
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Wrapper>
      <h1> Working with POST request</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <InputDefault
            type={`text`}
            placeholder={`Your name`}
            name={`name`}
            properties={postFormConfig.name}
          />
          <InputDefault
            type={`email`}
            placeholder={`Email`}
            name={`email`}
            properties={postFormConfig.email}
          />
          <InputDefault
            type={`text`}
            placeholder={`Phone`}
            name={`phone`}
            properties={postFormConfig.phone}
          />
          <div>
            <RadioHeader>Select your position</RadioHeader>
            <RadioGroup>
              {positionsData.positions.map(({ name, id }) => (
                <InputRadio
                  key={id}
                  label={name}
                  value={`${id}`}
                  name={`position_id`}
                />
              ))}
            </RadioGroup>
          </div>
          <DivFile>
            <InputFile
              upload={`Upload`}
              defaultName={`Upload your photo`}
              name={`photo`}
              properties={postFormConfig.photo}
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
