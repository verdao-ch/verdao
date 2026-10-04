"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function FAQSection({
  items,
  title = "Questions.",
  subtitle = "",
  dark = false,
}: FAQSectionProps) {
  return (
    <section className={`py-24 md:py-32 ${dark ? "bg-[#0d0d0d]" : "bg-[#f4f4f0]"}`}>
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="mb-12">
          {subtitle && (
            <p className={`font-bold text-sm tracking-widest uppercase mb-3 ${dark ? "text-[#e6fd53]" : "text-[#44b551]"}`}>
              {subtitle}
            </p>
          )}
          <h2 className={`text-4xl md:text-6xl font-extrabold mb-4 leading-[1.05] ${dark ? "text-white" : "text-[#0d0d0d]"}`}>
            {title}
          </h2>
          <div className={dark ? "line-lime" : "line-green"} />
        </div>

        <Accordion
          type="single"
          collapsible
          className={`rounded-2xl overflow-hidden border ${dark ? "border-white/10 bg-white/5" : "border-[#e8f7ea] bg-white shadow-lg"}`}
        >
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className={`border-b ${dark ? "border-white/10" : "border-[#e8f7ea]"}`}
            >
              <AccordionTrigger
                className={`px-6 py-5 text-left font-bold text-base hover:no-underline ${
                  dark ? "text-white hover:text-[#e6fd53]" : "text-[#0d0d0d] hover:text-[#44b551]"
                }`}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent
                className={`px-6 pb-5 text-sm leading-relaxed ${dark ? "text-white/50" : "text-[#666]"}`}
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
