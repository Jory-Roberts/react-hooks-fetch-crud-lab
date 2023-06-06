import React, { useEffect, useState } from 'react';
import AdminNavBar from './AdminNavBar';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

//http://localhost:4000/questions

function App() {
  const [page, setPage] = useState('List');
  const [questions, setQuestions] = useState([]);

  function addQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((r) => r.json())
      .then((questions) => setQuestions(questions));
  }, []);

  function deleteQuestion(questionId) {
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          const updatedQuestions = questions.filter((question) => question.id !== questionId);
          setQuestions(updatedQuestions);
        } else {
          console.log('Error:', response.statusText);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === 'Form' ? (
        <QuestionForm addQuestion={addQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          deleteQuestion={deleteQuestion}
        />
      )}
    </main>
  );
}

export default App;
