'use client';

import { Container, BackLink, Hero, Title, Category, Content, Section, SectionTitle, Paragraph, Example, ExampleTitle, ExampleDemo } from '@/components/Layout';

export default function FittsLaw() {
  return (
    <Container>
      <BackLink href="/">
        ← Back to Laws
      </BackLink>

      <Hero>
        <Title>Fitt's Law</Title>
        <Category>Interaction Design</Category>
      </Hero>

      <Content>
        <Section>
          <SectionTitle>Definition</SectionTitle>
          <Paragraph>
            Fitt's Law states that the time required to move to a target area is a function of the distance to the target and the size of the target. In mathematical terms, the movement time (MT) is proportional to the logarithm of the distance (D) divided by the width (W) of the target.
          </Paragraph>
          <Paragraph>
            MT = a + b log2(D/W + 1)
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Application to Agent Interfaces</SectionTitle>
          <Paragraph>
            In the context of agent interfaces, Fitt's Law has several important implications:
          </Paragraph>
          <ul>
            <li>Interactive elements should be appropriately sized for easy selection</li>
            <li>Frequently used controls should be placed in easily accessible locations</li>
            <li>The distance between related controls should be minimized</li>
            <li>Target areas should be large enough to accommodate different input methods</li>
          </ul>
        </Section>

        <Example>
          <ExampleTitle>Example: Agent Control Panel</ExampleTitle>
          <Paragraph>
            Consider a control panel for an AI agent. The most frequently used actions (like "Stop" or "Pause") should be:
          </Paragraph>
          <ul>
            <li>Larger than less critical controls</li>
            <li>Positioned in easily reachable areas of the interface</li>
            <li>Grouped with related controls to minimize movement distance</li>
          </ul>
          <ExampleDemo law="fitts" />
        </Example>

        <Section>
          <SectionTitle>Best Practices</SectionTitle>
          <Paragraph>
            When designing agent interfaces, follow these guidelines based on Fitt's Law:
          </Paragraph>
          <ul>
            <li>Make interactive elements at least 44x44 pixels for touch interfaces</li>
            <li>Place important controls near the edges of the screen (infinite width)</li>
            <li>Group related controls together to minimize movement distance</li>
            <li>Consider the size of interactive elements relative to their importance</li>
            <li>Account for different input methods (mouse, touch, voice)</li>
          </ul>
        </Section>
      </Content>
    </Container>
  );
} 