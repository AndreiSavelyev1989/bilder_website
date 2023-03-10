import React, { memo } from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: ${({ background }) => background};
  @media screen and (max-width: 770px) {
    height: 650px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 100%;
  @media screen and (max-width: 770px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60%;
`;

const Message = styled.div`
  text-align: center;
  font-size: 22px;
`;

const MessageOwner = styled.div`
  text-align: center;
  margin-top: 20px;
  font-weight: 600;
  font-size: 24px;
`;

export const Comment = memo(({ data, index }) => {
  return (
    <ItemWrapper key={index} url={data.url} background={data.background}>
      <Item>
        <Image src={data.url} />
        <MessageWrapper>
          <Message>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            consequuntur aperiam illum tempore cupiditate corporis totam
            aspernatur corrupti nulla numquam laboriosam illo ratione voluptate
            perferendis, ipsam eveniet ea modi ad.
          </Message>
          <MessageOwner>John Smith</MessageOwner>
        </MessageWrapper>
      </Item>
    </ItemWrapper>
  );
});
