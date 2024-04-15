import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearchHeartFill } from "react-icons/bs";
import { SearchInputProps } from "../constant/type";

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const onHandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchRef.current) {
      onSearch(searchRef.current.value);
    }
    console.log(event.target);
  };

  return (
    <form action="" onSubmit={onHandleSubmit} style={{ width: "100%" }}>
      <InputGroup>
        <InputLeftElement children={<BsSearchHeartFill />}></InputLeftElement>
        <Input
          ref={searchRef}
          type="text"
          pr={"4.5rem"}
          borderRadius={20}
          variant={"outline"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
