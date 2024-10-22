import { faq } from "@/app/about/faq";
import Answer from "@/components/about/answer";
import Question from "@/components/about/question";

export default function AboutPage() {
  return (
    /* FAQ */
    <div className="mx-auto mb-8 w-11/12 md:w-8/12 lg:w-6/12">
      <ul className="space-y-2">
        {Object.entries(faq).map(([key, value]) => (
          <li key={key}>
            <div className="">
              <Question question={value.question} />
              <Answer answer={value.answer} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
