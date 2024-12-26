import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
// import quizImage from '../assets/city.jpg';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: "If you spend more money than you earn, what is your financial situation called?",
    options: ["King of spendings", "In Debt", "In Profit", "Wealthy"],
    correctAnswer: "In Debt",
  },
  {
    question: "If you want to grow your money, where should you plant it?",
    options: [
      "In a magical garden",
      "Under your mattress",
      "In a treasure chest",
      "In investments",
    ],
    correctAnswer: "In investments",
  },
  {
    question: "What do you call a financial plan for the future?",
    options: ["A 'Spend-It-All' plan", "A shopping list", "A Budget", "Bucket list"],
    correctAnswer: "A Budget",
  },
  {
    question:"What's the difference between simple interest and compound interest?",
    options: [
      "Simple interest is for beginners, compound interest has a PhD in finance.",
      "Simple interest is calculated only on the principal, while compound interest is calculated on both the principal and the accumulated interest.",
      "Simple interest buys you a coffee, compound interest buys you a coffee shop.",
      "Simple interest is lazy; compound interest works overtime.",
    ],
    correctAnswer: "Simple interest is calculated only on the principal, while compound interest is calculated on both the principal and the accumulated interest.",
  },
  {
    question: "What is interest on a loan?",
    options: [
      "Money that loves you back",
      "A bonus gift from the bank",
      "Extra money you pay for borrowing",
      "A game banks play to trick you",
    ],
    correctAnswer: "Extra money you pay for borrowing",
  },
  {
    question: "What does 'inflation' mean?",
    options: [
      "When money shrinks in your wallet",
      "When prices go up and the value of money decreases",
      "When you fill a balloon with money",
      "When banks give out more cash",
    ],
    correctAnswer: "When prices go up and the value of money decreases",
  },
  {
    question: "What is the 'time value of money'?",
    options: [
      "Money gets more valuable if you keep it in your pocket longer",
      "Money today is worth more than the same amount in the future because of its earning potential",
      "The more time you spend with money, the more it loves you",
      "Money works best only in the morning",
    ],
    correctAnswer: "Money today is worth more than the same amount in the future because of its earning potential",
  },
  {
    question: "What is the purpose of a budget?",
    options: [
      "To stop you from buying fun stuff",
      "To help you manage your income and expenses",
      "To count how much pizza you can afford every month",
      "To impress your bank with your math skills",
    ],
    correctAnswer: "To help you manage your income and expenses",
  },
  {
    question: "What is a 'liability'?",
    options: [
      "Something fun to buy",
      "Something that costs you money over time",
      "A fancy financial word for borrowing",
      "A way to increase your savings",
    ],
    correctAnswer: "Something that costs you money over time",
  },
  {
    question: "Which of the following is an 'asset'?",
    options: [
      "Your favorite video game",
      "A savings account or an investment",
      "Your mobile phone bill",
      "A giant pizza",
    ],
    correctAnswer: "A savings account or an investment",
  },
  {
    question: "What does 'compound interest' do?",
    options: [
      "Makes your money grow faster over time by earning interest on both the money you saved and the interest you’ve earned",
      "It’s when your money doubles overnight",
      "It’s a fee banks charge for keeping your money",
      "It’s interest on money you borrowed for snacks",
    ],
    correctAnswer: "Makes your money grow faster over time by earning interest on both the money you saved and the interest you’ve earned",
  },
  {
    question: "What is 'debt'?",
    options: [
      "A money friend you have to repay",
      "When you owe money to someone or a bank",
      "A savings account’s evil twin",
      "A way to magically grow your money",
    ],
    correctAnswer: "When you owe money to someone or a bank",
  },
  {
    question: "Why is it important to have an 'emergency fund'?",
    options: [
      "To buy yourself gifts in tough times",
      "So you’re financially prepared for unexpected expenses",
      "To impress your friends with your savings",
      "To invest in video games",
    ],
    correctAnswer: "So you’re financially prepared for unexpected expenses",
  },
  {
    question: "What’s the difference between a 'debit card' and a 'credit card'?",
    options: [
      "A debit card gives you free money; a credit card charges you for using it",
      "A debit card uses your money; a credit card lets you borrow money to pay back later",
      "A debit card is for adults; a credit card is for kids",
      "A debit card is used only for emergencies",
    ],
    correctAnswer: "A debit card uses your money; a credit card lets you borrow money to pay back later",
  },
  {
    question: "What is 'diversification' in investing?",
    options: [
      "Putting all your money into one stock to double your chances",
      "Spreading your investments across different assets to reduce risk",
      "Investing in only the trendiest companies",
      "A strategy for buying things from different stores",
    ],
    correctAnswer: "Spreading your investments across different assets to reduce risk",
  },
  {
    question: "What is a 'stock'?",
    options: [
      "A fancy way to say you have a lot of something",
      "A type of investment where you own a piece of a company",
      "Money you find in your couch cushions",
      "The money you borrow from friends",
    ],
    correctAnswer: "A type of investment where you own a piece of a company",
  },
  {
    question: "What is 'net worth'?",
    options: [
      "The total amount of money you have in your wallet",
      "The difference between your assets and liabilities",
      "The value of your home only",
      "How much you spend in a year",
    ],
    correctAnswer: "The difference between your assets and liabilities",
  },
  {
    question: "What is 'credit score'?",
    options: [
      "A rating of how cool your credit card looks",
      "A number that shows how well you manage borrowing and repaying money",
      "A secret code that lets you buy things",
      "The amount of points you get for swiping your credit card",
    ],
    correctAnswer: "A number that shows how well you manage borrowing and repaying money",
  },
  {
    question: "What is a 'mutual fund'?",
    options: [
      "A pool of money collected from many investors to invest in stocks, bonds, or other securities",
      "A fund that you share with your friends",
      "Money you invest in a single company",
      "A special savings account for your birthday money",
    ],
    correctAnswer: "A pool of money collected from many investors to invest in stocks, bonds, or other securities",
  },
  {
    question: "What is a 'financial goal'?",
    options: [
      "Something you want to save or invest money for in the future",
      "A challenge to see how fast you can spend your money",
      "A reward banks give for having a savings account",
      "A competition between friends to see who saves more",
    ],
    correctAnswer: "Something you want to save or invest money for in the future",
  },
  {
    question: "What is 'opportunity cost'?",
    options: [
      "The money you save when you don't buy something",
      "The potential benefit you miss out on when choosing one option over another",
      "The price you pay for taking risks",
      "The cost of finding new opportunities",
    ],
    correctAnswer: "The potential benefit you miss out on when choosing one option over another",
  },
  {
    question: "What is 'risk' in investing?",
    options: [
      "The chance that an investment could make you a millionaire overnight",
      "The possibility that your investment may lose value",
      "A guaranteed way to make money",
      "A fun challenge when buying stocks",
    ],
    correctAnswer: "The possibility that your investment may lose value",
  },
  {
    question: "What is 'liquidity'?",
    options: [
      "How much water your money can absorb",
      "How easily you can convert an asset into cash",
      "The amount of money you have in your wallet",
      "A term for spending money quickly",
    ],
    correctAnswer: "How easily you can convert an asset into cash",
  },
  {
    question: "What is a 'bond'?",
    options: [
      "A friendship contract between you and your money",
      "A loan you give to a company or government in exchange for interest payments",
      "A form of money that sticks to you",
      "An agreement to save money for a year",
    ],
    correctAnswer: "A loan you give to a company or government in exchange for interest payments",
  },
  {
    question: "What is the purpose of 'insurance'?",
    options: [
      "To protect you from spending too much",
      "To help cover financial losses in case something bad happens",
      "To give your money extra security",
      "A way to get free money when you need it",
    ],
    correctAnswer: "To help cover financial losses in case something bad happens",
  },
  {
    question: "What is 'bad debt'?",
    options: [
      "A debt you owe to a villain",
      "Money which can’t be recovered",
      "Money borrowed for emergencies",
      "Debt that turns into savings later",
    ],
    correctAnswer: "Money which can’t be recovered",
  },
];

const QuizSection: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <section className="relative bg-white py-16 text-white w-screen">
      {/* <div className="absolute inset-0 opacity-30 z-0">
        <img src={quizImage} alt="Quiz Background" className="w-full h-full object-cover" />
      </div> */}

      <div className="relative max-w-5xl mx-auto px-4 z-10">
        <motion.h2
          className="text-4xl sm:text-3.5xl font-bold text-center mb-10 text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         Your Wallet Wants you to Take This quiz
        </motion.h2>

        {!showResult ? (
          <motion.div
            className="bg-[#F1A700] p-8 rounded-2xl shadow-lg max-w-xl mx-auto border-2 border-black"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-black">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  className={`w-full py-3 px-5 rounded-3xl text-center font-medium transition-all ${
                    selectedAnswer === option
                      ? option === questions[currentQuestion].correctAnswer
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : 'bg-white hover:bg-white-600 text-black font-bold'
                  }`}
                  onClick={() => handleAnswerClick(option)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="bg-green-600 p-6 rounded-lg shadow-lg max-w-xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
            <p>Your Score: {score} / {questions.length}</p>
          </motion.div>
        )}

        {/* <motion.div
          className="absolute top-10 left-10 z-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <FontAwesomeIcon icon={faQuestionCircle} className="text-yellow-400 text-5xl" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 z-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 text-5xl" />
        </motion.div> */}
      </div>
    </section>
  );
};

export default QuizSection;
