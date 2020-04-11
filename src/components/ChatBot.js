import React from 'react'
import ChatBot from 'react-simple-chatbot';


export default function Receptionist() {
    return (
        <div className="chatbotContainer">
            <h1>Welcome to the ChatBot Receptionist</h1>

        <div className="chatbot">
            <ChatBot
            steps={[
              {
                id: '0',
                message: 'Welcome to HHS I am the ChatBot Receptionist, What is your name?',
                trigger: '1',
              },
              {
                id: '1',
                user: true,
                trigger: '2',
              },
              {
                id: '2',
                message: 'Hi {previousValue}, how are you today',
                trigger: '3',
              },
              {
                  id: '3',
                  options: [
                    { value: 1, label: 'Good', trigger: '4' },
                    { value: 2, label: 'Not to good', trigger: '5' },
                    { value: 3, label: 'Poorly', trigger: '6' },
                    { value: 4, label: 'Need Cheering up', trigger: '7'},
                  ],
              },
              {
                  id: '4',
                  message: 'Thats good',
                  end: true,
              },
              {
                  id: '5',
                  message: 'Oh no lets add your symptops to your profile',
                  end: true,
              },
              {
                  id: '6',
                  message: 'Thats not good I think you should keep an eye on your symptoms, if it gets worse seek help from the 111 website or help line',
                  end: true,
              },
              {
                  id: '7',
                  message: 'OK lets go to google and look at some memes or cute pics of animals that should help :-) ',
                  end: true,
              },
            ]}
          />
          </div>
          </div>
    )};