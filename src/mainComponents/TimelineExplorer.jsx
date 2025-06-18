import React from 'react';
import '../../src/index.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RepositoryForm from '../timeLineExplorer/components/RepositoryForm';
import LoadingScreen from '../timeLineExplorer/components/LoadingScreen';
import TimelineChart from '../timeLineExplorer/components/TimelineChart';
import CommitDetails from '../timeLineExplorer/components/CommitDetails';
import { analyzeRepository } from '../timeLineExplorer/services/apiService';

const TimelineExplorer = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timelineData, setTimelineData] = useState(null);
  const [error, setError] = useState(null);

  // Listen for progress updates from the backend
  useEffect(() => {
    const handleProgress = (event) => {
      setProgress(event.detail.progress);
    };

    window.addEventListener('analysisProgress', handleProgress);

    return () => {
      window.removeEventListener('analysisProgress', handleProgress);
    };
  }, []);

  const handleFormSubmit = async ({ repoUrl, filePath }) => {
    try {
      setLoading(true);
      setError(null);
      setProgress(0);

      // In a real application, this would be a call to your backend API
      const data = await analyzeRepository(repoUrl, filePath);

      setTimelineData(data);
    } catch (err) {
      console.error('Error analyzing repository:', err);
      setError('Failed to analyze repository. Please check the URL and file path and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative container mx-auto py-8 px-4 bg-gray-900 text-white min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Obfuscation Timeline Explorer
        </h1>
      </div>

      {loading && <LoadingScreen progress={progress} />}

      {!timelineData ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <RepositoryForm onSubmit={handleFormSubmit} isLoading={loading} />
        </motion.div>
      ) : (
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTimelineData(null)}
              className="text-sm font-medium px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-md transition-all"
            >
              Analyze Another Repository
            </motion.button>
          </div>

          <TimelineChart timelineData={timelineData} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <CommitDetails timelineData={timelineData} />
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-800/20 text-red-400 p-4 rounded-md"
            >
              {error}
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default TimelineExplorer;
