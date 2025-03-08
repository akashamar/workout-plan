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

  // Define gradient colors for each depth level
  const gradients = [
    'from-cyan-400 to-blue-500',
    'from-blue-400 to-indigo-500',
    'from-indigo-400 to-violet-500',
    'from-violet-400 to-purple-500',
    'from-purple-400 to-fuchsia-500'
  ];
  const gradient = gradients[depth % gradients.length];
  const textColor = `text-${gradient.split('-')[1]}-400`;

  return (
    <motion.div 
      variants={fadeInUp}
      className="mb-3"
    >
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden rounded-xl bg-gray-800/50 shadow-neumorph-dark transition-all duration-300"
      >
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        
        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          whileTap={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
          className="relative flex w-full items-center justify-between p-5 text-left"
        >
          <div className="flex flex-col space-y-2">
            <span className={`text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              {name}
            </span>
            {muscles && (
              <span className="text-sm font-medium text-gray-100">
                ({muscles.length} {muscles.length === 1 ? 'muscle' : 'muscles'})
              </span>
            )}
          </div>
          {hasChildren && (
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <ChevronDownIcon className={`h-6 w-6 ${isOpen ? textColor : 'text-gray-100'}`} />
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
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  className="relative overflow-hidden rounded-lg bg-gray-800/50 p-4 text-gray-100 shadow-neumorph-dark-sm transition-all duration-300"
                >
                  {/* Subtle gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
                  <span className="relative">{muscle}</span>
                </motion.div>
              ))}
              {subgroups?.map((subgroup) => (
                <div className="pl-6" key={`${name}-subgroup-${subgroup.name}`}>
                  <MuscleGroupItem
                    {...subgroup}
                    depth={depth + 1}
                  />
                </div>
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
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8"
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
            className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent"
          >
            Muscle Groups
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-lg text-gray-100"
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
          {muscleGroups.map((group) => (
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