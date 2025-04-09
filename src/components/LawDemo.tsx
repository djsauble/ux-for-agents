import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-10px); }
`;

const ChatContainer = styled.div`
  width: 100%;
  height: 300px;
  background: #f5f7fa;
  border-radius: 0.5rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Message = styled.div<{ type: 'user' | 'agent' }>`
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  animation: ${fadeIn} 0.3s ease-out;
  ${props => props.type === 'user' 
    ? 'background: #3498db; color: white; align-self: flex-end;'
    : 'background: white; color: #2c3e50; align-self: flex-start; box-shadow: 0 2px 4px rgba(0,0,0,0.1);'
  }
`;

const InputArea = styled.div`
  padding: 1rem;
  background: white;
  border-top: 1px solid #e0e0e0;
  display: flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 1.5rem;
  outline: none;
  font-size: 0.9rem;
  
  &:focus {
    border-color: #3498db;
  }
`;

const SendButton = styled.button`
  padding: 0.5rem 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #2980b9;
  }
`;

type LawType = 'hick' | 'fitts' | 'jakob' | 'miller' | 'aesthetic';

interface LawDemoProps {
  law: LawType;
}

export const LawDemo = ({ law }: LawDemoProps) => {
  const [messages, setMessages] = useState<Array<{ text: string; type: 'user' | 'agent' }>>([]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const demoSteps = {
      hick: [
        { text: "I need help with a task", type: 'user' as const },
        { text: "Here are 20 different options to choose from...", type: 'agent' as const },
        { text: "That's too many options!", type: 'user' as const },
        { text: "Let me break this down into 3 simple steps...", type: 'agent' as const },
      ],
      fitts: [
        { text: "Click this tiny button", type: 'agent' as const },
        { text: "I can't click it, it's too small!", type: 'user' as const },
        { text: "Here's a larger, more accessible button", type: 'agent' as const },
      ],
      jakob: [
        { text: "How do I use this interface?", type: 'user' as const },
        { text: "It works just like other chat apps you know", type: 'agent' as const },
        { text: "Oh, I get it now!", type: 'user' as const },
      ],
      miller: [
        { text: "Remember these 10 items: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10", type: 'agent' as const },
        { text: "That's too many!", type: 'user' as const },
        { text: "Let's group them: (1-3), (4-6), (7-9), 10", type: 'agent' as const },
      ],
      aesthetic: [
        { text: "This interface looks beautiful!", type: 'user' as const },
        { text: "It must be easy to use too", type: 'user' as const },
        { text: "Thank you! Good design builds trust", type: 'agent' as const },
      ],
    };

    const steps = demoSteps[law];
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setMessages(prev => [...prev, steps[currentStep]]);
        setCurrentStep(prev => prev + 1);
      } else {
        setMessages([]);
        setCurrentStep(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [law, currentStep]);

  return (
    <ChatContainer>
      <ChatMessages>
        {messages.map((message, index) => (
          <Message key={index} type={message.type}>
            {message.text}
          </Message>
        ))}
      </ChatMessages>
      <InputArea>
        <Input placeholder="Type a message..." disabled />
        <SendButton disabled>Send</SendButton>
      </InputArea>
    </ChatContainer>
  );
}; 