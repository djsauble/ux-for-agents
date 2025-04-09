'use client';

import { Container, BackLink, Hero, Title, Category, Content, Section, SectionTitle, Paragraph, Example, ExampleTitle, ExampleDemo } from '@/components/Layout';

export default function AestheticUsabilityEffect() {
  return (
    <Container>
      <BackLink href="/">
        ← Back to Laws
      </BackLink>

      <Hero>
        <Title>Aesthetic-Usability Effect</Title>
        <Category>Visual Design</Category>
      </Hero>

      <Content>
        <Section>
          <SectionTitle>Definition</SectionTitle>
          <Paragraph>
            The Aesthetic-Usability Effect states that users often perceive aesthetically pleasing design as more usable. This means that attractive interfaces are often perceived as easier to use, even if they have the same level of functionality as less attractive interfaces.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Application to Agent Interfaces</SectionTitle>
          <Paragraph>
            In agent interfaces, the Aesthetic-Usability Effect has several important implications:
          </Paragraph>
          <ul>
            <li>Invest in high-quality visual design</li>
            <li>Use consistent and pleasing color schemes</li>
            <li>Implement smooth animations and transitions</li>
            <li>Pay attention to typography and spacing</li>
          </ul>
        </Section>

        <Example>
          <ExampleTitle>Example: Agent Response Display</ExampleTitle>
          <Paragraph>
            When presenting agent responses:
          </Paragraph>
          <ul>
            <li>Use clean, readable typography</li>
            <li>Implement subtle animations for state changes</li>
            <li>Maintain consistent spacing and alignment</li>
            <li>Use appropriate color contrast and hierarchy</li>
          </ul>
          <ExampleDemo law="aesthetic" />
        </Example>

        <Section>
          <SectionTitle>Best Practices</SectionTitle>
          <Paragraph>
            When designing agent interfaces, follow these guidelines based on the Aesthetic-Usability Effect:
          </Paragraph>
          <ul>
            <li>Maintain consistent visual language throughout the interface</li>
            <li>Use appropriate white space and visual hierarchy</li>
            <li>Implement subtle animations for feedback and transitions</li>
            <li>Choose colors that are both pleasing and functional</li>
            <li>Ensure typography is both beautiful and readable</li>
          </ul>
        </Section>
      </Content>
    </Container>
  );
} 