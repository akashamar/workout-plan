'use client';

import React, { useState } from 'react';
import { muscleGroups } from '@/data/muscleGroups';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

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

interface MuscleGroupItemProps {
  name: string;
  muscles?: string[];
  subgroups?: MuscleGroupItemProps[];
  depth?: number;
}

const MuscleGroupItem = ({ name, muscles, subgroups, depth = 0 }: MuscleGroupItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = (muscles && muscles.length > 0) || (subgroups && subgroups.length > 0);
  const colors = ['cyan', 'blue', 'indigo', 'violet', 'purple', 'fuchsia'];
  const color = colors[depth % colors.length];

  return (
    <motion.div 
      variants={fadeInUp}
      className={depth > 0 ? ['mb-3', `ml-${depth * 4}`].join(' ') : 'mb-3'}
    >
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className={`overflow-hidden rounded-2xl bg-gray-900 shadow-neumorph-dark transition-all duration-300`}
      >
        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
          whileTap={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          className="flex w-full items-center justify-between p-5 text-left"
        >
          <div className="flex items-center space-x-3">
            <span className={`${depth === 0 ? 'text-xl' : 'text-lg'} font-semibold bg-gradient-to-r from-${color}-400 to-${color}-600 bg-clip-text text-transparent`}>
              {name}
            </span>
            {muscles && (
              <span className="text-sm font-normal text-gray-400">
                ({muscles.length} {muscles.length === 1 ? 'muscle' : 'muscles'})
              </span>
            )}
          </div>
          {hasChildren && (
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDownIcon className={`h-5 w-5 ${isOpen ? `text-${color}-400` : 'text-gray-500'}`} />
            </motion.div>
          )}
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div 
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="space-y-3 p-4"
            >
              {muscles?.map((muscle) => (
                <motion.div
                  variants={fadeInUp}
                  key={`${name}-muscle-${muscle}`}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                  className={`rounded-xl bg-gray-800 p-4 text-sm text-gray-300 shadow-neumorph-dark-sm transition-all duration-300`}
                >
                  {muscle}
                </motion.div>
              ))}
              {subgroups?.map((subgroup) => (
                <MuscleGroupItem
                  key={`${name}-subgroup-${subgroup.name}`}
                  {...subgroup}
                  depth={depth + 1}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function MuscleGroupsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <motion.h1 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent sm:text-5xl"
          >
            Muscle Groups
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-lg text-gray-400"
          >
            Explore different muscle groups and their anatomical details
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          {muscleGroups.map((group, index) => (
            <MuscleGroupItem
              key={`group-${group.name}`}
              {...group}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
} 