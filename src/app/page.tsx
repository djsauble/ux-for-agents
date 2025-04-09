'use client';

import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Hero = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 1rem;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #34495e;
  max-width: 800px;
  margin: 0 auto;
`;

const LawGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const LawCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const LawTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const LawCategory = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #e0e0e0;
  border-radius: 1rem;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const LawDescription = styled.p`
  color: #34495e;
  line-height: 1.6;
`;

const laws = [
  {
    title: "Fitts's Law",
    category: "Interaction Design",
    description: "The time to acquire a target is a function of the distance to and size of the target. In agent interfaces, this means making interactive elements appropriately sized and positioned for easy access.",
  },
  {
    title: "Hick's Law",
    category: "Cognitive Principles",
    description: "The time it takes to make a decision increases with the number and complexity of choices. For agents, this means presenting information and options in manageable chunks.",
  },
  {
    title: "Miller's Law",
    category: "Cognitive Principles",
    description: "The average person can only keep 7 (plus or minus 2) items in their working memory. This is crucial for designing agent interactions that don't overwhelm users.",
  },
  {
    title: "Jakob's Law",
    category: "Behavioral Patterns",
    description: "Users spend most of their time on other sites. This means they prefer your site to work the same way as all the other sites they already know.",
  },
  {
    title: "Aesthetic-Usability Effect",
    category: "Visual Design",
    description: "Users often perceive aesthetically pleasing design as more usable. This is especially important for agent interfaces where trust and comfort are crucial.",
  },
];

export default function Home() {
  return (
    <Container>
      <Hero>
        <Title>Laws of UX for Agents</Title>
        <Subtitle>
          A comprehensive guide to designing interfaces where humans interact with AI agents.
          Explore the fundamental principles that make agent interfaces intuitive and effective.
        </Subtitle>
      </Hero>

      <LawGrid>
        {laws.map((law, index) => (
          <LawCard key={index}>
            <LawTitle>{law.title}</LawTitle>
            <LawCategory>{law.category}</LawCategory>
            <LawDescription>{law.description}</LawDescription>
          </LawCard>
        ))}
      </LawGrid>
    </Container>
  );
} 