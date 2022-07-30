import { memo } from "react";
import styled from "styled-components";

import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { Input } from "../atoms/inputs/input";

export const SearchInput = memo(() => {
  return (
    <div>
      <SContainer>
        <Input placeholder="検索条件を入力" />
        <SButtonWrapper>
          <PrimaryButton>Search</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    </div>
  );
});

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
