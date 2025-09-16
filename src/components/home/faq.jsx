import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faq = [
    {
      question: "Apa itu Quiz Nabi?",
      answer:
        "Quiz Nabi adalah aplikasi interaktif untuk belajar tentang para nabi dalam Islam.",
    },
    {
      question: "Bagaimana cara menggunakan aplikasi ini?",
      answer:
        "Pengguna dapat memilih kategori dan menjawab pertanyaan yang diberikan.",
    },
    {
      question: "Apakah aplikasi ini gratis?",
      answer: "Ya, Quiz Nabi dapat digunakan secara gratis.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faq.map((item, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <h3
                className="font-semibold cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
              </h3>
              {openIndex === index && (
                <p className="mt-2 text-gray-400">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
