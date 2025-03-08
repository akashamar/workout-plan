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

const ExerciseCard = ({ exercise, dayColor, index }: { exercise: ExerciseType; dayColor: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`overflow-hidden rounded-lg border border-${dayColor}-100 bg-white shadow-sm transition-all duration-200 hover:shadow-md`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <div className="flex-1 pr-4">
          <h3 className="text-lg font-semibold text-gray-900">{exercise.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{exercise.targetMuscles}</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center rounded-full bg-${dayColor}-50 px-2.5 py-0.5 text-xs font-medium text-${dayColor}-700`}
            >
              {exercise.sets} sets
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center rounded-full bg-${dayColor}-50 px-2.5 py-0.5 text-xs font-medium text-${dayColor}-700`}
            >
              {exercise.reps} reps
            </motion.span>
            {exercise.restTime && (
              <motion.span 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center rounded-full bg-${dayColor}-50 px-2.5 py-0.5 text-xs font-medium text-${dayColor}-700`}
              >
                <ClockIcon className="mr-1 h-3 w-3" />
                {exercise.restTime}
              </motion.span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {exercise.videoUrl && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <PlayCircleIcon className={`h-5 w-5 text-${dayColor}-500`} />
            </motion.div>
          )}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDownIcon className={`h-5 w-5 text-${isOpen ? `${dayColor}-600` : 'gray-400'}`} />
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className={`border-t border-${dayColor}-100 bg-${dayColor}-50/30 p-4`}>
              {exercise.videoUrl && (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2"
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
  const colors = ['blue', 'indigo', 'purple', 'pink', 'rose', 'orange'];
  const dayColor = colors[index % colors.length];

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`overflow-hidden rounded-lg border border-${dayColor}-200 bg-white shadow transition-all duration-200 hover:shadow-md`}
    >
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: dayColor === 'blue' ? 'rgba(59,130,246,0.05)' : 
                                    dayColor === 'indigo' ? 'rgba(99,102,241,0.05)' : 
                                    'rgba(147,51,234,0.05)' }}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <div>
          <motion.h2 
            layout
            className={`text-xl font-semibold text-${dayColor}-900`}
          >
            Day {day.day}
          </motion.h2>
          <motion.p 
            layout
            className="mt-1 text-sm text-gray-600"
          >
            {day.name}
          </motion.p>
          <motion.p 
            layout
            className="mt-2 text-sm text-gray-500"
          >
            {day.exercises.length} exercises
          </motion.p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className={`h-6 w-6 text-${isOpen ? `${dayColor}-600` : 'gray-400'}`} />
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
            <div className={`border-t border-${dayColor}-100 p-6`}>
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
                    dayColor={dayColor}
                    index={i}
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
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
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              Workout Plan
            </motion.h1>
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <motion.select
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                value={selectedWeek}
                onChange={(e) => setSelectedWeek(Number(e.target.value))}
                className="rounded-lg border-gray-300 bg-white py-2 pl-3 pr-10 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              >
                <option value={1}>Week 1</option>
                <option value={2}>Week 2</option>
              </motion.select>
            </motion.div>
          </div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-lg font-medium text-gray-900">{workoutPlan.overview.goal}</p>
            <p className="text-sm text-gray-600">{workoutPlan.overview.repsAndSets}</p>
          </motion.div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-2"
          >
            <p className="text-sm text-gray-500">{workoutPlan.overview.trainingSplit}</p>
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