var quotes = [
  {
    quote:
      'The only limit to our realization of tomorrow is our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote:
      'In the end, we will remember not the words of our enemies, but the silence of our friends.',
    author: 'Martin Luther King Jr.',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    quote: 'The purpose of our lives is to be happy.',
    author: 'Dalai Lama',
  },
  {
    quote: 'Get busy living or get busy dying.',
    author: 'Stephen King',
  },
  {
    quote: 'You must be the change you wish to see in the world.',
    author: 'Mahatma Gandhi',
  },
  {
    quote: 'The best way to predict the future is to invent it.',
    author: 'Alan Kay',
  },
  {
    quote:
      'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    quote:
      'It is our choices that show what we truly are, far more than our abilities.',
    author: 'J.K. Rowling',
  },
  {
    quote:
      'Happiness is not something ready-made. It comes from your own actions.',
    author: 'Dalai Lama',
  },
];

function generateQuote() {
  if (quotes.length === 0) {
    document.getElementById('quoteText').innerText =
      'No more quotes available!';
    document.getElementById('quoteAuthor').innerText = '';
    return;
  }
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var selectedQuote = quotes[randomIndex];

  document.getElementById('quoteText').innerText = `"${selectedQuote.quote}"`;
  document.getElementById(
    'quoteAuthor'
  ).innerText = `- ${selectedQuote.author}`;
  quotes.splice(randomIndex, 1);
}
