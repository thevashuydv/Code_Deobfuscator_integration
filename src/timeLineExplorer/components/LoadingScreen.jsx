import React from 'react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from '../../components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';

// Loading messages that will cycle
const loadingMessages = [
  "Cloning repository...",
  "Analyzing commit history...",
  "Examining JavaScript code...",
  "Detecting obfuscation patterns...",
  "Calculating obfuscation scores...",
  "Generating timeline data...",
  "Almost there..."
];

const LoadingScreen = ({ progress = 0, message = 'Processing repository...' }) => {
  const [currentMessage, setCurrentMessage] = useState(loadingMessages[0]);
  const [messageIndex, setMessageIndex] = useState(0);

  // Cycle through loading messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        const nextIndex = (prev + 1) % loadingMessages.length;
        setCurrentMessage(loadingMessages[nextIndex]);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900/90 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <Card className="w-full max-w-md mx-auto bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient text-xl font-bold">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
            />
            Analyzing Repository
          </CardTitle>
          <CardDescription className="text-gray-400">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMessage}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {currentMessage}
              </motion.div>
            </AnimatePresence>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Progress value={progress} className="h-2 bg-gray-700" />
          <div className="text-center text-sm text-gray-400">
            This may take a few moments...
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LoadingScreen;
