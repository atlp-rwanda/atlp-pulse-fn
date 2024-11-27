import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import {
  GET_ALL_QUESTIONS,
  CREATE_QUESTION,
  CREATE_ANSWER,
  DELETE_QUESTION,
  DELETE_ANSWER,
} from '../queries/questions.query';

function CommunityQuestions() {
  const { loading, error, data, refetch } = useQuery(GET_ALL_QUESTIONS);
  const [createQuestion, { loading: isSubmitting }] =
    useMutation(CREATE_QUESTION);
  const { t } = useTranslation();
  const [createAnswer] = useMutation(CREATE_ANSWER);
  const [deleteQuestion] = useMutation(DELETE_QUESTION);
  const [deleteAnswer] = useMutation(DELETE_ANSWER);
  const [loggedUser, setLoggedUser] = useState<string | null>(null);
  const [questionText, setQuestionText] = useState('');
  const [answerText, setAnswerText] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState<any>(null);
  const [questionTitleText, setQuestionTitleText] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    const authData = localStorage.getItem('auth');
    if (authData) {
      const parsedAuthData = JSON.parse(authData);
      setLoggedUser(parsedAuthData.userId);
    }
  }, []);
  useEffect(() => {
    if (data) setQuestions(data.getAllQuestions);

    if (data && selectedQuestion) {
      const updatedQuestion = data.getAllQuestions.find(
        (question: any) => question.id === selectedQuestion.id,
      );
      setSelectedQuestion(updatedQuestion || null);
    }
  }, [data, selectedQuestion]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading questions.</p>;

  const handleCreateQuestion = async () => {
    if (questionText.trim()) {
      await createQuestion({
        variables: {
          title: questionTitleText,
          content: questionText,
        },
        update: (cache, { data: { createQuestion } }) => {
          const existingQuestions: any = cache.readQuery({
            query: GET_ALL_QUESTIONS,
          });
          cache.writeQuery({
            query: GET_ALL_QUESTIONS,
            data: {
              getAllQuestions: [
                ...existingQuestions.getAllQuestions,
                createQuestion,
              ],
            },
          });
        },
        onError: (error) => {
          toast.error('Unable to create question.');
        },
        onCompleted: () => {
          toast.success('Question created successfully');
          refetch();
          setQuestionText('');
          setQuestionTitleText('');
        },
      });
    } else {
      toast.error('Question text cannot be empty.');
    }
  };

  const handleCreateAnswer = async (questionId: string) => {
    if (answerText.trim()) {
      await createAnswer({
        variables: {
          questionId,
          content: answerText,
        },
        update: (cache, { data: { createAnswer } }) => {
          const existingQuestions: any = cache.readQuery({
            query: GET_ALL_QUESTIONS,
          });
          const updatedQuestions = existingQuestions.getAllQuestions.map(
            (question: any) => {
              if (question?.id === questionId) {
                return {
                  ...question,
                  answers: [...(question?.answers || []), createAnswer],
                };
              }

              return question;
            },
          );
          setQuestions(updatedQuestions);
          cache.writeQuery({
            query: GET_ALL_QUESTIONS,
            data: { getAllQuestions: updatedQuestions },
          });
        },
        onError: (error) => {
          toast.error('Unable to submit your answer.');
        },
        onCompleted: () => {
          toast.success('Answer submitted successfully');
          refetch();
          setAnswerText('');
        },
      });
    } else {
      toast.error('Answer text cannot be empty.');
    }
  };

  const handleDeleteQuestion = async (questionId: string) => {
    await deleteQuestion({
      variables: { id: questionId },
      update: (cache) => {
        const existingQuestions: any = cache.readQuery({
          query: GET_ALL_QUESTIONS,
        });
        const updatedQuestions = existingQuestions.getAllQuestions.filter(
          (question: any) => question?.id !== questionId,
        );
        cache.writeQuery({
          query: GET_ALL_QUESTIONS,
          data: { getAllQuestions: updatedQuestions },
        });
      },
      onError: (error) => {
        toast.error('Unable to delete the question.');
      },
      onCompleted: () => {
        toast.success('Question deleted successfully');
        setSelectedQuestion('');

        refetch();
      },
    });
  };

  const handleDeleteAnswer = async (answerId: string) => {
    await deleteAnswer({
      variables: { id: answerId },
      update: (cache) => {
        const existingQuestions: any = cache.readQuery({
          query: GET_ALL_QUESTIONS,
        });
        const updatedQuestions = existingQuestions.getAllQuestions.map(
          (question: any) => ({
            ...question,
            answers: question?.answers.filter(
              (answer: any) => answer.id !== answerId,
            ),
          }),
        );
        cache.writeQuery({
          query: GET_ALL_QUESTIONS,
          data: { getAllQuestions: updatedQuestions },
        });
      },
      onError: (error) => {
        toast.error('Unable to delete the answer.');
      },
      onCompleted: () => {
        toast.success('Answer deleted successfully');
        // setSelectedQuestion('');
        refetch({ query: GET_ALL_QUESTIONS });
      },
    });
  };

  return (
    <div className="flex  items-start   p-4 bg-indigo-100 dark:bg-transparent rounded-md shadow-lg h-full ">
      <div className="w-1/3 pr-4 border-r border-divider-bg dark:border-border-dark ">
        <h2 className="text-lg font-semibold text-center text-header-text dark:text-dark-text-fill">
          Questions
        </h2>
        {loggedUser && (
          <div className="mt-4 -4 bg-tertiary dark:bg-transparent rounded-md flex flex-col gap-2">
            <input
              type="text"
              value={questionTitleText}
              onChange={(e) => setQuestionTitleText(e.target.value)}
              placeholder="Write question title..."
              className="p-2 border dark:bg-dark-tertiary  dark:text-white border-gray-300 dark:border-gray-600 rounded w-full"
            />
            <textarea
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              rows={3}
              className="w-full dark:bg-dark-tertiary dark:text-white p-2 border rounded-md "
              placeholder="Ask a question..."
            />
            <button
              onClick={handleCreateQuestion}
              disabled={isSubmitting}
              type="button"
              className="mt-2 w-fit p-2 px-6 bg-primary text-white rounded-md disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Question'}
            </button>
          </div>
        )}
        <ul className="mt-4 space-y-4">
          {questions?.map((question: any) => (
            <li
              key={question?.id}
              className={`cursor-pointer p-3 rounded-md shadow-sm ${
                selectedQuestion?.id === question?.id
                  ? 'bg-primary text-dark-text-fill'
                  : 'bg-tertiary text-light-text dark:bg-dark-tertiary dark:text-dark-text-fill'
              }`}
              onClick={() => setSelectedQuestion(question)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedQuestion(question);
                }
              }}
              role="presentation"
            >
              <p className="text-md font-semibold">{question?.title}</p>
              <p className="text-sm text-secondary dark:text-dark-text-fill">
                Asked by: {question?.author?.profile?.name}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-2/3 pl-4">
        {selectedQuestion ? (
          <div>
            <h2 className="text-lg font-bold text-primary">
              {selectedQuestion?.title}
            </h2>
            <span>{selectedQuestion?.content}</span>
            <p className="text-sm text-secondary dark:text-dark-text-fill">
              Asked by {selectedQuestion?.author?.profile?.name}
            </p>
            {loggedUser && loggedUser === selectedQuestion?.author?.id && (
              <button
                type="button"
                onClick={() => handleDeleteQuestion(selectedQuestion?.id)}
                className="text-red-500 text-sm"
              >
                {t('Delete')}
              </button>
            )}

            <div className="mt-4 dark:p-4  dark:bg-dark-tertiary">
              <h3 className="font-semibold text-secondary dark:text-dark-text-fill border-b border-black py-2">
                Answers thread
              </h3>

              {selectedQuestion?.answers?.length > 0 ? (
                selectedQuestion?.answers.map((answer: any) => (
                  <div
                    key={answer.id}
                    className={`mt-2 p-4  rounded-md flex flex-col ${
                      loggedUser && loggedUser === answer?.author?.id
                        ? 'items-end'
                        : 'items-start'
                    }`}
                  >
                    <div
                      className={` bg-gray-100 dark:bg-primary shadow dark:text-white text-black dark:bg-dark-secondary p-2 rounded-md ${
                        loggedUser && loggedUser === answer?.author?.id
                          ? 'text-right'
                          : 'text-left'
                      }`}
                    >
                      <p>{answer.content}</p>
                      <p className="text-sm text-secondary  dark:text-white">
                        Answered by {answer.author?.profile?.name}
                      </p>
                    </div>

                    {/* Delete button for the user's own answers */}
                    {loggedUser && loggedUser === answer?.author?.id && (
                      <button
                        type="button"
                        onClick={() => handleDeleteAnswer(answer.id)}
                        className="mt-2 text-red-500 text-sm"
                      >
                        {t('Delete')}
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 dark:text-dark-45">
                  No answers yet. Be the first to answer!
                </p>
              )}

              {loggedUser && (
                <div className="mt-4 flex items-start flex-col w-full">
                  <textarea
                    value={answerText}
                    onChange={(e) => setAnswerText(e.target.value)}
                    placeholder="Write an answer..."
                    className="p-2 border outline-none bg-transparent dark:text-white dark:bg-dark-tertiary min-w-full min-h-24 border-gray-300 dark:border-gray-600 dark:text-black rounded"
                  />
                  <button
                    type="button"
                    onClick={() => handleCreateAnswer(selectedQuestion?.id)}
                    className="mt-2 bg-primary text-white rounded p-2 px-6"
                  >
                    Submit Answer
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-lg text-gray-500 dark:text-dark-45">
            Select a question to view details.
          </p>
        )}
      </div>
    </div>
  );
}

export default CommunityQuestions;
