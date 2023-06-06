import React from 'react';

function QuestionList({ questions }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questions.map((question) => {
          return <li key={question.id}>{question.prompt}</li>;
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
