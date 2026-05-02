import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeroText } from "./HeroText";

type FAQItem = {
  title: string;
  description: string;
  value: string;
};

const data: FAQItem[] = [
  {
    title: "Do I need any prior experience before starting a course?",
    description:
      "Our expert-led courses focus on real-world skills with lifetime access and community support.",
    value: "1",
  },
  {
    title:
      "How long will I have access to the course materials after enrolling?",
    description:
      "Our expert-led courses focus on real-world skills with lifetime access and community support.",
    value: "2",
  },
  {
    title:
      "Are the certificates you provide recognized or useful for career advancement?",
    description:
      "Our expert-led courses focus on real-world skills with lifetime access and community support.",
    value: "3",
  },
];

export function FAQ() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <HeroText
          title="Frequently Asked Questions"
          description="Got questions? We've answered most common ones to help you get started confidently."
          descriptionMaxWidth="max-w-[350px]"
        />

        <Accordion
          type="single"
          collapsible
          defaultValue="1"
          className="max-w-3xl mx-auto"
        >
          {data.map((accordion: FAQItem) => (
            <AccordionItem
              key={accordion.value}
              value={accordion.value}
              className="bg-blue-100 rounded-lg px-4 mb-5"
            >
              <AccordionTrigger>{accordion.title}</AccordionTrigger>
              <AccordionContent>{accordion.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
