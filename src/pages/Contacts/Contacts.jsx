import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  FormContainer,
  WrapperFormName,
  WrapperFormContacts,
  ContactsWrapper,
  Message
} from './Contacts.styled';

export default function  Contacts()  {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactsWrapper>
      <FormContainer>
      <WrapperFormName>
            <ContactForm />
            </WrapperFormName>
            <WrapperFormContacts>
            <Filter />
            {isLoading && <Message>Is Loading...</Message>}
        {error && <Message>{error}</Message>}
        {items.length > 0 ? (
            <ContactList />
            ) : (
              <Message>There aren't any contacts...</Message>
            )}
          </WrapperFormContacts>
        </FormContainer>
        </ContactsWrapper>
    </>
  );
};
