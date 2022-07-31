import styled from 'styled-components';
import Button from '../form/button.default';
import InputDefault from '../form/input.default';
import InputFile from '../form/input.file';
import InputRadio from '../form/input.radio';

const PostRequest = () => {
  
  
  return (
      <Wrapper>
        <h1> Working with POST request</h1>
        <form>
          <InputDefault name="name" type="text" placeholder="Your name" />
          <InputDefault name="email" type="email" placeholder="Email" />
          <InputDefault name="tel" type="text" placeholder="Phone" />
          <div>
            <RadioHeader>Select your position</RadioHeader>
            <RadioGroup>
              <InputRadio name="pos" label="Frontend developer" id="front" />
              <InputRadio name="pos" label="Backend developer" id="back" />
              <InputRadio name="pos" label="Designer" id="designer" />
              <InputRadio name="pos" label="QA" id="qa" />
            </RadioGroup>
          </div>
          <DivFile>
            <InputFile upload="Upload" fileName="Upload your photo" />
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
