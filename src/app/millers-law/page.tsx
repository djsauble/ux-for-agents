'use client';

import { Container, BackLink, Hero, Title, Category, Content, Section, SectionTitle, Paragraph, Example, ExampleTitle, ExampleDemo, List } from '@/components/Layout';

export default function MillersLaw() {
  return (
    <Container>
      <BackLink href="/">
        ← Back to Laws
      </BackLink>

      <Hero>
        <Title>Miller's Law</Title>
        <Category>Cognitive Principles</Category>
      </Hero>

      <Content>
        <Section>
          <SectionTitle>Definition</SectionTitle>
          <Paragraph>
            Miller's Law states that the average person can only keep 7 (plus or minus 2) items in their working memory at any given time. This principle, also known as "The Magical Number Seven," has significant implications for interface design.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Application to Agent Interfaces</SectionTitle>
          <Paragraph>
            In agent interfaces, Miller's Law has several important implications:
          </Paragraph>
          <List>
            <li>Limit the number of items presented at once</li>
            <li>Chunk information into meaningful groups</li>
            <li>Provide clear visual hierarchy and organization</li>
            <li>Use progressive disclosure for complex information</li>
          </List>
        </Section>

        <Example>
          <ExampleTitle>Example: Agent Response Display</ExampleTitle>
          <Paragraph>
            When displaying agent responses or information:
          </Paragraph>
          <List>
            <li>Break long responses into digestible chunks</li>
            <li>Use clear headings and subheadings</li>
            <li>Highlight key points for quick scanning</li>
            <li>Provide options to expand/collapse detailed information</li>
          </List>
          <ExampleDemo law="miller" />
        </Example>

        <Section>
          <SectionTitle>Best Practices</SectionTitle>
          <Paragraph>
            When designing agent interfaces, follow these guidelines based on Miller's Law:
          </Paragraph>
          <List>
            <li>Keep menus and navigation items to 5-9 items</li>
            <li>Use meaningful categorization to group related items</li>
            <li>Implement progressive disclosure for complex features</li>
            <li>Provide clear visual hierarchy and organization</li>
            <li>Use consistent patterns for similar types of information</li>
          </List>
        </Section>
      </Content>
    </Container>
  );
} 