import styled from 'styled-components';
import Link from 'next/link';
import { LawDemo } from './LawDemo';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #3498db;
  text-decoration: none;
  margin-bottom: 2rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Hero = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 1rem;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

export const Category = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #e0e0e0;
  border-radius: 1rem;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const Paragraph = styled.p`
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const Example = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;

export const ExampleTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

export const ExampleDemo = styled(LawDemo)`
  margin: 1rem 0;
`;

export const List = styled.ul`
  color: #34495e;
  line-height: 1.6;
  margin: 0 0 1.5rem 1.5rem;
  padding: 0;

  li {
    margin-bottom: 0.5rem;
  }
`; 