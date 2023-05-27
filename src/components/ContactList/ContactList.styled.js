import styled from 'styled-components';

export const ListContacts = styled.ul`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const ListContactItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
border-radius: 4px;
background-color: grey;
opacity: 0.5;
cursor: pointer;
&:hover {
  transform: scale(1.2);
opacity: 1;
color: red;
}
`