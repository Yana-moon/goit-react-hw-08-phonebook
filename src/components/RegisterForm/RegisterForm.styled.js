import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  display: flex;
  height: 100vh;
  /* align-items: center; */
  justify-content: center;
  background-color: rgba(66, 75, 92, 0.5);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const RegisterFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 120px auto;
  padding: 20px;
  width: 350px;
  height: 300px;
  border-radius: 3px;
  background-color: #fcf797;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const RegisterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const RegisterInput = styled.input`
  width: 250px;
  height: 25px;
  padding: 5px;
  border-radius: 7px;
  border: 1px solid #ccc;
  :focus {
    outline: none;
    border-color: #6a08c2;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  :hover {
    border-color: #6a08c2;
  }
`;

export const RegisterButton = styled.button`
  width: 100px;
  height: 30px;
  padding: 5px;
  font-weight: 500;
  font-size: 14px;
  border-radius: 3px;
  border-color: #ffffff;
  background-color: #988ef5;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #ffffff;
    border-color: #6a08c2;
  }
`;