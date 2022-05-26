//Bài 44: Sử dụng styled-components phần 1
import React from "react";
import styled, { css } from "styled-components";
/**
 * const StyledCard = styled.tag(h1,h2,div,span,
 * strong, a, p, section, article...)``
 * css-in-JS
 */
const StyledCard = styled.div`
  position: relative;
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  width: calc(100% - 36px);
  bottom: 0;
  border-radius: 20px;
  padding: 20px;
  background-color: white;
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const CardUse = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const UseAvata = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UseName = styled.span`
  color: #333;
  font-weight: 300px;
  font-size: 16px;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500px;
  color: black;
`;
const CardAmount = styled.span`
  font-size: ${(props) => props.fontSize || "10px"};
  font-weight: bold;

  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(86.88deg, #20e3b2, #2cccff);
    `};
  ${(props) =>
    !props.secondary &&
    css`
      background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
      );
    `};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;
const CardMeta = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const Card = (props) => {
  console.log("card ~ props", props);
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=700x525&vertical=top"
          alt=""
        />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUse>
            <UseAvata
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=700x525&vertical=top"
              alt=""
            />
            <UseName>@zndrson</UseName>
          </CardUse>
          <CardMeta>
            <img src="/coolicon.svg" alt="heart" />
            <span>256</span>
          </CardMeta>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount secondary={props.secondary} fontSize="18px">
            12,000 PSL
          </CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
