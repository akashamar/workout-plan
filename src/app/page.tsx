'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChartBarIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Workout Plan',
    description: 'Follow a comprehensive 2-week Push-Pull-Legs workout routine designed for muscle gain and strength.',
    icon: ClipboardDocumentListIcon,
    href: '/workout-plan',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Muscle Groups',
    description: 'Explore detailed information about different muscle groups and their exercises.',
    icon: ChartBarIcon,
    href: '/muscle-groups',
    gradient: 'from-blue-500 to-indigo-600',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-16 pb-32 flex flex-col items-center justify-center min-h-screen text-center px-6"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight"
        >
          <span className="gradient-animate">Your Personal Workout</span>
          <br />
          <span className="gradient-animate">Journey</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl leading-8 text-gray-300 max-w-2xl text-balance"
        >
          Track your workouts, understand muscle groups, and achieve your fitness goals with our comprehensive workout plan.
        </motion.p>

        <motion.div 
          variants={stagger}
          initial="initial"
          animate="animate"
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-16 max-w-5xl"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                href={feature.href}
                className="block group"
              >
                <div className="glass-effect rounded-2xl px-6 pb-8 pt-10 shadow-neumorph-dark transition-all duration-300 hover:shadow-neumorph-dark-sm group-hover:glow h-full">
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient} shadow-neumorph-dark-sm text-white`}>
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-7 tracking-tight text-cyan-400 text-glow">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0" style={{ 
            background: `linear-gradient(to right, rgba(30, 36, 51, 0.6) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(30, 36, 51, 0.6) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
      </motion.div>
    </div>
  );
} 