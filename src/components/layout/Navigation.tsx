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
      className="relative z-50"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex lg:flex-1"
          >
          
          </motion.div>
          <div className="hidden sm:flex sm:gap-x-6 sm:items-center">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`group inline-flex items-center gap-x-2.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    pathname === item.href
                      ? 'glass-effect text-cyan-400 shadow-neumorph-dark-sm glow'
                      : 'text-gray-400 hover:text-cyan-400 hover:glass-effect'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className={pathname === item.href ? 'text-glow' : ''}
                  >
                    <item.icon className="h-5 w-5" />
                  </motion.div>
                  <span className={pathname === item.href ? 'text-glow' : ''}>
                    {item.name}
                  </span>
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
              className="glass-effect inline-flex items-center justify-center rounded-xl p-2.5 text-gray-400 shadow-neumorph-dark-sm hover:text-cyan-400"
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
            static
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-50 sm:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md" 
            />
            <Dialog.Panel
              as={motion.div}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto glass-effect px-6 py-6 shadow-neumorph-dark sm:max-w-sm"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold gradient-animate"
                  >
                    WorkoutPlan
                  </motion.span>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="glass-effect rounded-xl p-2.5 text-gray-400 shadow-neumorph-dark-sm hover:text-cyan-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </div>
              <div className="mt-8 flow-root">
                <div className="-my-6 divide-y divide-gray-800/20">
                  <div className="space-y-3 py-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`-mx-3 flex items-center gap-x-3 rounded-xl px-4 py-3 text-base font-semibold transition-all duration-300 ${
                            pathname === item.href
                              ? 'glass-effect text-cyan-400 shadow-neumorph-dark-sm glow'
                              : 'text-gray-400 hover:text-cyan-400 hover:glass-effect'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                            className={pathname === item.href ? 'text-glow' : ''}
                          >
                            <item.icon className="h-6 w-6" />
                          </motion.div>
                          <span className={pathname === item.href ? 'text-glow' : ''}>
                            {item.name}
                          </span>
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