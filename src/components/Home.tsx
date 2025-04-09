import styled from 'styled-components';
import Link from 'next/link';
import { Container, Hero, Title, Category } from './Layout';

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #34495e;
  max-width: 800px;
  margin: 0 auto;
`;

export const LawGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const LawCard = styled(Link)`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const LawTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

export const LawCategory = styled(Category)`
  margin-bottom: 1rem;
`;

export const LawDescription = styled.p`
  color: #34495e;
  line-height: 1.6;
`;

export const HomeLayout = ({ children }: { children: React.ReactNode }) => (
  <Container>
    <Hero>
      <Title>Laws of UX for Agents</Title>
      <Subtitle>
        A comprehensive guide to designing interfaces where humans interact with AI agents.
        Explore the fundamental principles that make agent interfaces intuitive and effective.
      </Subtitle>
    </Hero>
    {children}
  </Container>
); 