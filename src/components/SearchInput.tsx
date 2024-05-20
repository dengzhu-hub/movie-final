import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FormEvent, useRef } from 'react';
import { BsSearchHeartFill } from 'react-icons/bs';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const navigate = useNavigate();
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const searchRef = useRef<HTMLInputElement>(null);
  const onHandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchRef.current) {
      setSearchText(searchRef.current.value);

      searchRef.current.value = '';
      navigate('/');
    }

    console.log(event.target);
  };

  return (
    <form action="" onSubmit={onHandleSubmit} style={{ width: '100%' }}>
      <InputGroup>
        <InputLeftElement children={<BsSearchHeartFill />}></InputLeftElement>
        <Input
          borderWidth={'2px'}
          ref={searchRef}
          type="text"
          pr={'4.5rem'}
          borderRadius={20}
          variant={'outline'}
          colorScheme="gray.50"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
