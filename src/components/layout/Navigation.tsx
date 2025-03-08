'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Workout Plan', href: '/workout-plan', icon: ClipboardDocumentListIcon },
  { name: 'Muscle Groups', href: '/muscle-groups', icon: ChartBarIcon },
];

const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header 
      variants={fadeInDown}
      initial="initial"
      animate="animate"
      className="bg-gray-900 shadow-neumorph-dark"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex"
          >
            <Link href="/" className="flex items-center">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
              >
                WorkoutPlan
              </motion.span>
            </Link>
          </motion.div>
          <div className="hidden sm:flex sm:gap-x-8 sm:items-center">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`group inline-flex items-center gap-x-2 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl ${
                    pathname === item.href
                      ? 'bg-gray-800 text-cyan-400 shadow-neumorph-dark-sm'
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="h-5 w-5" />
                  </motion.div>
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex sm:hidden"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-400 shadow-neumorph-dark-sm hover:text-cyan-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </motion.button>
          </motion.div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="sm:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-10 bg-black" 
            />
            <Dialog.Panel
              as={motion.div}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 shadow-neumorph-dark sm:max-w-sm"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
                  >
                    WorkoutPlan
                  </motion.span>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="rounded-xl p-2.5 text-gray-400 shadow-neumorph-dark-sm hover:text-cyan-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-800">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`-mx-3 flex items-center gap-x-2 rounded-xl px-4 py-2 text-base font-semibold transition-all duration-300 ${
                            pathname === item.href
                              ? 'bg-gray-800 text-cyan-400 shadow-neumorph-dark-sm'
                              : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <item.icon className="h-6 w-6" />
                          </motion.div>
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 