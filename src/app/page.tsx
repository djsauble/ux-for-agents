'use client';

import { HomeLayout, LawGrid, LawCard, LawTitle, LawCategory, LawDescription } from '@/components/Home';

const laws = [
  {
    title: "Fitts's Law",
    category: "Interaction Design",
    description: "The time to acquire a target is a function of the distance to and size of the target. In agent interfaces, this means making interactive elements appropriately sized and positioned for easy access.",
    href: "/fitts-law",
  },
  {
    title: "Hick's Law",
    category: "Cognitive Principles",
    description: "The time it takes to make a decision increases with the number and complexity of choices. For agents, this means presenting information and options in manageable chunks.",
    href: "/hicks-law",
  },
  {
    title: "Miller's Law",
    category: "Cognitive Principles",
    description: "The average person can only keep 7 (plus or minus 2) items in their working memory. This is crucial for designing agent interactions that don't overwhelm users.",
    href: "/millers-law",
  },
  {
    title: "Jakob's Law",
    category: "Behavioral Patterns",
    description: "Users spend most of their time on other sites. This means they prefer your site to work the same way as all the other sites they already know.",
    href: "/jakobs-law",
  },
  {
    title: "Aesthetic-Usability Effect",
    category: "Visual Design",
    description: "Users often perceive aesthetically pleasing design as more usable. This is especially important for agent interfaces where trust and comfort are crucial.",
    href: "/aesthetic-usability-effect",
  },
];

export default function Home() {
  return (
    <HomeLayout>
      <LawGrid>
        {laws.map((law, index) => (
          <LawCard key={index} href={law.href}>
            <LawTitle>{law.title}</LawTitle>
            <LawCategory>{law.category}</LawCategory>
            <LawDescription>{law.description}</LawDescription>
          </LawCard>
        ))}
      </LawGrid>
    </HomeLayout>
  );
} 