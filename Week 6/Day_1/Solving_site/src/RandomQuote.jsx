import React from 'react'

export default function RandomQuote() {

    let  quotes =  [ 
        "In honor of commencements of every kind, we’ve gathered a list of messages,sayings and graduation wishes to use however you see fite.",
        "Among these quips, you'll find quotes from luminaries like Eleanor Roosevelt, Maya Angelou, Mahatma Gandhi, Helen Keller and many others."
    ];

    const randomIndex = Math.floor(Math.random()*quotes.length);
    const quote = quotes[randomIndex] 
  return (
    <div>
      {quote}
    </div>
  )
}
