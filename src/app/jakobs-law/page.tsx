'use client';

import { Container, BackLink, Hero, Title, Category, Content, Section, SectionTitle, Paragraph, Example, ExampleTitle, ExampleDemo } from '@/components/Layout';

export default function JakobsLaw() {
  return (
    <Container>
      <BackLink href="/">
        ← Back to Laws
      </BackLink>

      <Hero>
        <Title>Jakob's Law</Title>
        <Category>Behavioral Patterns</Category>
      </Hero>

      <Content>
        <Section>
          <SectionTitle>Definition</SectionTitle>
          <Paragraph>
            Jakob's Law states that users spend most of their time on other sites, and they prefer your site to work the same way as all the other sites they already know. This principle emphasizes the importance of following established design patterns and conventions.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Application to Agent Interfaces</SectionTitle>
          <Paragraph>
            In agent interfaces, Jakob's Law has several important implications:
          </Paragraph>
          <ul>
            <li>Follow established interaction patterns for common actions</li>
            <li>Use familiar terminology and iconography</li>
            <li>Maintain consistent navigation and layout patterns</li>
            <li>Leverage users' existing mental models</li>
          </ul>
        </Section>

        <Example>
          <ExampleTitle>Example: Agent Command Interface</ExampleTitle>
          <Paragraph>
            When designing an agent command interface:
          </Paragraph>
          <ul>
            <li>Use familiar command patterns (e.g., slash commands)</li>
            <li>Follow common chat interface conventions</li>
            <li>Implement standard keyboard shortcuts</li>
            <li>Use recognizable icons for common actions</li>
          </ul>
          <ExampleDemo law="jakob" />
        </Example>

        <Section>
          <SectionTitle>Best Practices</SectionTitle>
          <Paragraph>
            When designing agent interfaces, follow these guidelines based on Jakob's Law:
          </Paragraph>
          <ul>
            <li>Study and implement common patterns from popular interfaces</li>
            <li>Use standard terminology and avoid unnecessary jargon</li>
            <li>Maintain consistent interaction patterns across the interface</li>
            <li>Provide clear feedback and error messages in familiar formats</li>
            <li>Consider platform-specific conventions when relevant</li>
          </ul>
        </Section>
      </Content>
    </Container>
  );
} 