import styled from 'styled-components';
import InputDefault from '../form/input.default';
import InputRadio from '../form/input.radio';

const PostRequest = () => {
  return (
    <>
      <Wrapper>
        <h1> Working with POST request</h1>
        <form>
          <InputDefault name="name" type="text" placeholder="Your name" />
          <InputDefault name="email" type="email" placeholder="Email" />
          <InputDefault name="tel" type="text" placeholder="Phone" />
          <div>
            <p>Select your position</p>
            <RadioGroup>
              <InputRadio name="pos" label="Frontend developer" id="front" />
              <InputRadio name="pos" label="Backend developer" id="back" />
              <InputRadio name="pos" label="Designer" id="designer" />
              <InputRadio name="pos" label="QA" id="qa" />
            </RadioGroup>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  h1 {
    margin: 140px 0 0;
    text-align: center;
  }
  form {
    width: 380px;
    margin: 0 auto;
    padding: 43px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 38px;
  }
`;

const RadioGroup = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  padding: 6px 0;
`;

export default PostRequest;
