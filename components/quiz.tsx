"use client"

import { useState } from "react"

interface QuizProps {
  section: string
}

const quizzes: Record<string, Array<{ question: string; options: string[]; correct: number }>> = {
  introduction: [
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style System", "Cascading System Sheets"],
      correct: 0,
    },
    {
      question: "Which is the best way to add CSS to HTML?",
      options: ["Inline styles", "Internal stylesheet", "External stylesheet", "HTML attributes"],
      correct: 2,
    },
    {
      question: "How do you select an element with ID 'header'?",
      options: [".header", "#header", "header", "id=header"],
      correct: 1,
    },
  ],
  properties: [
    {
      question: "Which property sets text color?",
      options: ["text-color", "color", "font-color", "foreground-color"],
      correct: 1,
    },
    {
      question: "What is the difference between margin and padding?",
      options: [
        "No difference",
        "Margin is inside, padding is outside",
        "Margin is outside, padding is inside",
        "They are synonyms",
      ],
      correct: 2,
    },
    {
      question: "How do you create a solid 2px black border?",
      options: [
        "border: 2px black solid",
        "border: 2px solid black",
        "border-size: 2px solid black",
        "border: solid 2px black",
      ],
      correct: 1,
    },
  ],
  intermediate: [
    {
      question: "What is specificity in CSS?",
      options: [
        "The order of CSS rules",
        "How specific a selector is",
        "The importance of a style",
        "The speed of CSS",
      ],
      correct: 1,
    },
    {
      question: "Which selector has the highest specificity?",
      options: ["Element selector", "Class selector", "ID selector", "Universal selector"],
      correct: 2,
    },
    {
      question: "What does position: absolute do?",
      options: [
        "Removes element from normal flow",
        "Fixes element to viewport",
        "Makes element sticky",
        "Centers element",
      ],
      correct: 0,
    },
  ],
  advanced: [
    {
      question: "What does display: flex do?",
      options: ["Makes element invisible", "Creates flexible layout", "Floats element", "Positions element"],
      correct: 1,
    },
    {
      question: "How do you make a website responsive?",
      options: [
        "Only use desktops",
        "Use media queries and flexible layouts",
        "Use fixed sizes",
        "Use JavaScript only",
      ],
      correct: 1,
    },
    {
      question: "At what screen size typically starts a mobile breakpoint?",
      options: ["320px", "480px", "768px", "1024px"],
      correct: 1,
    },
  ],
}

export default function Quiz({ section }: QuizProps) {
  const sectionKey = section as keyof typeof quizzes
  const questions = quizzes[sectionKey] || []
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
      setSelectedAnswer(null)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="p-6 md:p-12 max-w-2xl mx-auto min-h-screen flex items-center justify-center">
      <div className="w-full bg-card border border-border rounded-xl shadow-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-8 capitalize">{section} Quiz</h1>

        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">Quiz Complete!</h2>
            <p className="text-lg text-secondary mb-8">
              You scored <span className="font-bold text-accent">{score}</span> out of{" "}
              <span className="font-bold text-accent">{questions.length}</span> questions
            </p>
            <div className="text-6xl font-bold text-accent mb-8">{((score / questions.length) * 100).toFixed(0)}%</div>
            <button
              onClick={() => {
                setCurrentQuestion(0)
                setScore(0)
                setShowScore(false)
                setSelectedAnswer(null)
              }}
              className="bg-accent hover:bg-cyan-400 text-primary-foreground font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              Retake Quiz
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <div className="flex justify-between text-sm text-secondary mb-3">
                <span>Question {currentQuestion + 1}</span>
                <span>{questions.length} total</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-teal-500 to-accent h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-3 mb-8">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 md:p-5 text-left rounded-lg transition-all duration-300 font-medium border-2 ${
                    selectedAnswer === null
                      ? "bg-muted border-border text-foreground hover:bg-slate-800 hover:border-accent cursor-pointer"
                      : selectedAnswer === index
                        ? index === questions[currentQuestion].correct
                          ? "bg-teal-900/30 border-teal-600 text-teal-200"
                          : "bg-red-900/30 border-red-600 text-red-200"
                        : index === questions[currentQuestion].correct
                          ? "bg-teal-900/30 border-teal-600 text-teal-200"
                          : "bg-muted border-border text-secondary"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {selectedAnswer !== null && (
              <button
                onClick={handleNext}
                className="w-full bg-accent hover:bg-cyan-400 text-primary-foreground font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {currentQuestion === questions.length - 1 ? "See Results" : "Next Question"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
