'use client';

import React, { useState } from 'react';
import { workoutPlan } from '@/data/workoutPlan';
import type { Exercise as ExerciseType, WorkoutDay as WorkoutDayType } from '@/data/workoutPlan';
import { ChevronDownIcon, ClockIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import VideoPlayer from '@/components/ui/VideoPlayer';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ExerciseCard = ({ exercise, dayColor }: { exercise: ExerciseType; dayColor: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const textColor = `text-${dayColor}-400`;

  return (
    <motion.div
      variants={fadeInUp}
      className="relative overflow-hidden rounded-xl bg-gray-800/50 shadow-neumorph-dark-sm transition-all duration-300"
    >
      {/* Gradient border effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-${dayColor}-500/10 to-${dayColor}-600/10`} />
      
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
        whileTap={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
        className="relative flex w-full items-center justify-between p-5 text-left"
      >
        <div className="flex flex-col space-y-2">
          <h3 className={`text-xl font-bold ${textColor}`}>
            {exercise.name}
          </h3>
          <p className="text-sm font-medium text-gray-100">
            {exercise.targetMuscles}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center rounded-lg bg-gray-900/50 px-3 py-1 text-sm font-medium ${textColor} shadow-neumorph-dark-sm`}
            >
              {exercise.sets} sets
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center rounded-lg bg-gray-900/50 px-3 py-1 text-sm font-medium ${textColor} shadow-neumorph-dark-sm`}
            >
              {exercise.reps} reps
            </motion.span>
            {exercise.restTime && (
              <motion.span 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center rounded-lg bg-gray-900/50 px-3 py-1 text-sm font-medium ${textColor} shadow-neumorph-dark-sm`}
              >
                <ClockIcon className="mr-1.5 h-4 w-4" />
                {exercise.restTime}
              </motion.span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          {exercise.videoUrl && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className={textColor}
            >
              <PlayCircleIcon className="h-6 w-6" />
            </motion.div>
          )}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDownIcon className={`h-6 w-6 ${isOpen ? textColor : 'text-gray-100'}`} />
          </motion.div>
        </div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="relative border-t border-gray-700 bg-gray-900/50 p-4 shadow-neumorph-dark-inner">
              {exercise.videoUrl && (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 overflow-hidden rounded-lg shadow-neumorph-dark-sm"
                >
                  <VideoPlayer url={exercise.videoUrl} />
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WorkoutDay = ({ day, index }: { day: WorkoutDayType; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Define color styles for each index
  const colorStyles = [
    { text: 'text-cyan-400', gradient: 'from-cyan-500/10 to-blue-500/10' },
    { text: 'text-blue-400', gradient: 'from-blue-500/10 to-indigo-500/10' },
    { text: 'text-indigo-400', gradient: 'from-indigo-500/10 to-violet-500/10' },
    { text: 'text-violet-400', gradient: 'from-violet-500/10 to-purple-500/10' },
    { text: 'text-purple-400', gradient: 'from-purple-500/10 to-cyan-500/10' }
  ];
  
  const currentColor = colorStyles[index % colorStyles.length];

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl bg-gray-800/50 shadow-neumorph-dark transition-all duration-300"
    >
      {/* Gradient border effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient}`} />
      
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
        whileTap={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
        className="relative flex w-full items-center justify-between p-6 text-left"
      >
        <div>
          <motion.h2 
            layout
            className={`text-2xl font-bold ${currentColor.text}`}
          >
            Day {day.day}
          </motion.h2>
          <motion.p 
            layout
            className="mt-1 text-base font-medium text-gray-100"
          >
            {day.name}
          </motion.p>
          <motion.p 
            layout
            className="mt-2 text-sm text-gray-300"
          >
            {day.exercises.length} exercises
          </motion.p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className={`h-6 w-6 ${isOpen ? currentColor.text : 'text-gray-100'}`} />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="relative border-t border-gray-700 p-6">
              <motion.div 
                variants={staggerChildren}
                initial="initial"
                animate="animate"
                className="space-y-4"
              >
                {day.exercises.map((exercise, i) => (
                  <ExerciseCard 
                    key={`${day.day}-${exercise.name}-${i}`} 
                    exercise={exercise}
                    dayColor={currentColor.text.split('-')[1]}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function WorkoutPlanPage() {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const weeks = [
    { value: 1, label: 'Week 1' },
    { value: 2, label: 'Week 2' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent sm:text-5xl"
            >
              Workout Plan
            </motion.h1>
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative inline-block"
            >
              <motion.button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded-xl bg-gray-800/50 px-4 py-2.5 text-base font-medium text-gray-100 shadow-neumorph-dark transition-all duration-300 hover:bg-gray-800/80 focus:outline-none"
              >
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Week {selectedWeek}
                </span>
                <ChevronDownIcon 
                  className={`h-5 w-5 text-cyan-400 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="fixed inset-0 z-30"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full z-40 mt-2 min-w-[114px] transform"
                      style={{ maxHeight: 'calc(100vh - 100px)' }}
                    >
                      <div className="relative overflow-hidden rounded-xl bg-gray-800/95 shadow-neumorph-dark backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
                        <div className="relative divide-y divide-gray-700/50">
                          {weeks.map((week) => (
                            <motion.button
                              key={week.value}
                              onClick={() => {
                                setSelectedWeek(week.value);
                                setIsDropdownOpen(false);
                              }}
                              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                              whileTap={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                              className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-all duration-300 ${
                                selectedWeek === week.value
                                  ? 'text-cyan-400'
                                  : 'text-gray-100 hover:text-cyan-400'
                              }`}
                            >
                              <span className="font-medium">{week.label}</span>
                              {selectedWeek === week.value && (
                                <motion.div
                                  initial={{ scale: 0.5, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                                />
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-lg font-medium text-cyan-400">{workoutPlan.overview.goal}</p>
            <p className="text-sm text-gray-100">{workoutPlan.overview.repsAndSets}</p>
          </motion.div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-2"
          >
            <p className="text-sm text-gray-300">{workoutPlan.overview.trainingSplit}</p>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedWeek}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {workoutPlan.weeks
              .find((week) => week.week === selectedWeek)
              ?.days.map((day, index) => (
                <WorkoutDay key={`${selectedWeek}-${day.day}`} day={day} index={index} />
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
} 