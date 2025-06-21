/*TimelineChart takes in an array of commit data (timelineData) and visually shows the progression of obfuscation in JavaScript code over time.
  Each commit is displayed like a "step" in a timeline — click any step to see detailed metrics like:
    Number of evals
    Count of short variable names
    Whether the file is minified */

import React from 'react';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';

// Color coding for scores
// A helper function that decides the color of a score badge
const getScoreColor = (score) => {
  if (score >= 80) return 'bg-red-500 text-white';
  if (score >= 50) return 'bg-yellow-400 text-black';
  if (score > 0) return 'bg-blue-500 text-white';
  return 'bg-green-500 text-white';
};

const TimelineChart = ({ timelineData }) => {
  const [selected, setSelected] = useState(null); // Stores which commit step is currently clicked to show extra info - selected
  const [isDarkMode, setIsDarkMode] = useState(false); // Tracks if the site is in dark mode for theme responsiveness - isDarkMode

  // Check for dark mode and update when it changes
  // Uses a MutationObserver to watch for changes in theme (light/dark).
  // it isn't directly used in rendering right now — possibly future use.
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Initial check
    checkDarkMode();

    // Set up observer to detect theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Sort by date ascending
  // Sorts the timeline data from oldest to newest using the commit timestamp.
  const sorted = [...timelineData].sort((a, b) => a.timestamp - b.timestamp);

  return (
    <Card className="w-full bg-gray-800 text-white shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-gradient text-2xl font-bold">Obfuscation Timeline</CardTitle>
        <CardDescription className="text-gray-400">
          Each commit is shown as a step. Click a step for details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6 relative border-l-2 border-gray-600 pl-6">
          {sorted.map((item, idx) => (
            <div key={item.commitHash} className="relative group">
              {/* Timeline dot */}
              <div className={`absolute -left-7 top-2 w-5 h-5 rounded-full border-4 border-gray-800 shadow ${getScoreColor(item.score)} flex items-center justify-center font-bold text-xs`}>{idx+1}</div>
              <div
                className={`p-4 rounded-md bg-gray-700 border border-gray-600 shadow transition cursor-pointer hover:bg-gray-600 ${selected === idx ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setSelected(selected === idx ? null : idx)}
              >
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded ${getScoreColor(item.score)}`}>Score: {item.score}</span>
                  <span className="text-xs text-gray-400">{new Date(item.timestamp).toLocaleDateString()}</span>
                  <span className="text-xs font-mono text-gray-400">{item.commitHash.substring(0, 7)}</span>
                </div>
                {selected === idx && (
                  <div className="mt-3 text-sm grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium">Eval Count:</span> {item.metrics.evalCount}
                    </div>
                    <div>
                      <span className="font-medium">Short Vars:</span> {item.metrics.shortVarCount}
                    </div>
                    <div>
                      <span className="font-medium">Minified:</span> {item.metrics.isMinified ? 'Yes' : 'No'}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TimelineChart;
