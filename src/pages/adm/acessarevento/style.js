import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: #fff;
  font-family: "Poppins", sans-serif;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 40px auto;
`;

export const Card = styled.div`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, .08);
`;

export const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 25px;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #111;
  margin-bottom: 15px;
  text-align: center;
`;

export const Description = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 25px;
  text-align: center;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
  font-size: 16px;
  color: #333;

  strong {
    color: #111;
  }
    align-items:center;

span{
  font-weight:600;
}

svg{
  color:#f9be06;
  font-size:18px;
}
`;

export const Section = styled.div`
  margin-top: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  color: #111;
  margin-bottom: 20px;
  display: flex;
align-items: center;
gap: 10px;

svg{
  color:#f9be06;
}
`;

export const EmptyText = styled.p`
  color: #888;
  text-align: center;
`;

export const ParticipantItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 20px;

  border: 1px solid #ececec;
  border-radius: 12px;

  background: #fafafa;

  margin-bottom: 12px;

  transition: .2s;

  &:hover{
    border-color:#f9be06;
    transform:translateY(-2px);
  }

  strong{
    color:#111;
    font-size:16px;
  }

  span{
    color:#666;
    font-size:14px;
  }
`;

export const RankingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  padding: 16px 20px;

  border: 1px solid #ececec;
  border-radius: 12px;

  background: #fafafa;

  margin-bottom: 12px;

  transition: .2s;

  &:hover{
    border-color:#f9be06;
    transform:translateY(-2px);
  }

  strong{
    color:#111;
    font-size:16px;
  }

  span{
    color:#666;
    font-size:14px;
  }
`;

export const Position = styled.div`
  width: 60px;
  min-width: 60px;
  height: 60px;

  border-radius: 50%;

  background: #f9be06;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: bold;
  color: #111;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  width: 42px;
  height: 42px;

  border: none;
  border-radius: 10px;

  background: #f9be06;

  color: #111;

  font-size: 18px;
  font-weight: bold;

  cursor: pointer;

  transition: .2s;

  &:hover{
    background:#111;
    color:#f9be06;
  }
    display:flex;
align-items:center;
justify-content:center;

svg{
  font-size:16px;
}
`;

export const RemoveButton = styled.button`
  width: 42px;
  height: 42px;

  border: none;
  border-radius: 10px;

  background: #ff4d4f;

  color: white;

  font-size: 18px;
  font-weight: bold;

  cursor: pointer;

  transition: .2s;

  &:hover{
    background:#d9363e;
  }
    display:flex;
align-items:center;
justify-content:center;

svg{
  font-size:16px;
}
`;

export const BackButton = styled.button`
  width: 100%;

  margin-top: 40px;

  padding: 16px;

  border: none;
  border-radius: 12px;

  background: #f9be06;

  color: #111;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  transition: .2s;

  &:hover{
    background:#111;
    color:#f9be06;
    transform:translateY(-2px);
  }

  &:active{
    transform:translateY(1px);
  }
`;