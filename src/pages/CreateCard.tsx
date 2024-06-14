import React, {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  InputHTMLAttributes,
  useState,
} from 'react';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import { addPlayer } from '../lib/collection';
import { Player } from '../types';

export const CreateCard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (values: Player) => {
    try {
      const response = await addPlayer(values);
      setShowPopup(true);
      setResponseMessage('Player Added Successfully!');
    } catch (error) {
      setShowPopup(true);
      setResponseMessage(`Failed to add player: ${error}`);
    }
  };

  return (
    <Wrapper>
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit, form }) => (
          <StyledFormContainer onSubmit={handleSubmit}>
            <Field name="firstname" validate={required}>
              {({ input, meta }) => (
                <StyledFormGroup>
                  <label>First Name</label>
                  <StyledInput {...input} type="text" />
                  {meta.error && meta.touched && <StyledError>{meta.error}</StyledError>}
                </StyledFormGroup>
              )}
            </Field>
            <Field name="lastname" validate={required}>
              {({ input, meta }) => (
                <StyledFormGroup>
                  <label>Last Name</label>
                  <StyledInput {...input} type="text" />
                  {meta.error && meta.touched && <StyledError>{meta.error}</StyledError>}
                </StyledFormGroup>
              )}
            </Field>
            <Field name="birthday" validate={required}>
              {({ input, meta }) => (
                <StyledFormGroup>
                  <label>Birthday</label>
                  <StyledInput {...input} type="date" />
                  {meta.error && meta.touched && <StyledError>{meta.error}</StyledError>}
                </StyledFormGroup>
              )}
            </Field>
            <Field name="image" validate={required}>
              {({ input, meta }) => (
                <StyledFormGroup>
                  <label>Image URL</label>
                  <StyledInput {...input} type="url" />
                  {meta.error && meta.touched && <StyledError>{meta.error}</StyledError>}
                </StyledFormGroup>
              )}
            </Field>
            <StyledSubmitButton type="submit">Create Card</StyledSubmitButton>
          </StyledFormContainer>
        )}
      />
      {showPopup && (
        <StyledPopup>
          <StyledPopupContent>
            <h2>{responseMessage}</h2>
            <StyledButton onClick={() => setShowPopup(false)}>Close</StyledButton>
          </StyledPopupContent>
        </StyledPopup>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const StyledFormContainer = styled.form<FormHTMLAttributes<HTMLFormElement>>`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledFormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

const StyledInput = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const StyledError = styled.span`
  color: red;
  font-size: 12px;
`;

const StyledSubmitButton = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }
`;

const StyledButton = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const required = (value: any) => (value ? undefined : 'Required');
