'use client';

import { Container, BackLink, Hero, Title, Category, Content, Section, SectionTitle, Paragraph, Example, ExampleTitle, ExampleDemo, List } from '@/components/Layout';

export default function HicksLaw() {
  return (
    <Container>
      <BackLink href="/">
        ← Back to Laws
      </BackLink>

      <Hero>
        <Title>Hick's Law</Title>
        <Category>Cognitive Principles</Category>
      </Hero>

      <Content>
        <Section>
          <SectionTitle>Definition</SectionTitle>
          <Paragraph>
            Hick's Law states that the time it takes to make a decision increases with the number and complexity of choices. The law is mathematically expressed as:
          </Paragraph>
          <Paragraph>
            RT = a + b log2(n)
          </Paragraph>
          <Paragraph>
            Where RT is reaction time, n is the number of choices, and a and b are constants.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Application to Agent Interfaces</SectionTitle>
          <Paragraph>
            In agent interfaces, Hick's Law has several important implications:
          </Paragraph>
          <List>
            <li>Break complex decisions into smaller, manageable steps</li>
            <li>Limit the number of options presented at any given time</li>
            <li>Use progressive disclosure to reveal options as needed</li>
            <li>Group related options together to reduce cognitive load</li>
          </List>
        </Section>

        <Example>
          <ExampleTitle>Example: Agent Configuration</ExampleTitle>
          <Paragraph>
            When configuring an AI agent, instead of presenting all options at once:
          </Paragraph>
          <List>
            <li>Start with basic configuration options</li>
            <li>Provide advanced options in separate sections</li>
            <li>Use wizards or step-by-step processes for complex setups</li>
            <li>Offer recommended defaults for quick setup</li>
          </List>
          <ExampleDemo law="hick" />
        </Example>

        <Section>
          <SectionTitle>Best Practices</SectionTitle>
          <Paragraph>
            When designing agent interfaces, follow these guidelines based on Hick's Law:
          </Paragraph>
          <List>
            <li>Limit initial choices to 5-7 options</li>
            <li>Use categorization to group related options</li>
            <li>Implement progressive disclosure for complex features</li>
            <li>Provide clear defaults and recommendations</li>
            <li>Use visual hierarchy to guide attention to important choices</li>
          </List>
        </Section>
      </Content>
    </Container>
  );
} 