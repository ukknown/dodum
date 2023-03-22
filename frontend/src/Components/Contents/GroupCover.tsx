import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  imageUrl?: string;
  title?: string;
  author?: string;
  participant?: number;
  id?: number;
}

export default function GroupCover(group: Props) {
  const navigate = useNavigate();
  const bookRoom = () => {
    navigate(`/bookgroup/${group.id}`);
  };

  return (
    <GroupImage imageUrl={group.imageUrl} onClick={()=>{bookRoom()}}>
      <WhiteDiv>
        <Title>{group.title}</Title>
      <Bottom>
        <Author>{group.author}</Author>
        <Participant>{group.participant}명 참여중</Participant>
      </Bottom>
      </WhiteDiv>
    </GroupImage>
  );
}

// styled component
const GroupImage = styled.div<Props>`
  background-image: url(${(props: Props) => props.imageUrl});
  min-width: 200px;
  height: 150px;
  background-size: cover;
  filter: drop-shadow(2px 5px 4px rgba(0, 0, 0, 0.25));
  border-radius: 3px;
  margin: 5px 15px 5px 5px;
`;

const WhiteDiv = styled.div`
  width: 200px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 0px 0px 3px 3px;
  bottom: 0;
  position: absolute;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1rem;
  margin: 10px 5px 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Author = styled.div`
  font-size: 0.9rem;
  color: #5c5649;
  margin: 0px 5px 0px 10px;
`;

const Participant = styled.div`
  color: #5c5649;
  font-size: 0.8rem;
  text-align: right;
  margin-right: 5px;
`;
