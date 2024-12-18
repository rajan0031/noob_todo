import React, { useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';

const VoiceInput = ({ addTodo }) => {
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const recognition = new window.SpeechRecognition();
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      addTodo({
        text,
        category: 'Personal',
        priority: '✨',
        recurring: false,
      });
    };
    recognition.start();
  };

  return (
    <button
      className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded"
      onClick={startListening}
    >
      <FaMicrophone />
      <span>{isListening ? 'Listening...' : 'Add with Voice'}</span>
    </button>
  );
};

export default VoiceInput;
