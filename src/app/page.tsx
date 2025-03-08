'use client';

import Link from 'next/link';
import { ChartBarIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Workout Plan',
    description: 'Follow a comprehensive 2-week Push-Pull-Legs workout routine designed for muscle gain and strength.',
    icon: ClipboardDocumentListIcon,
    href: '/workout-plan',
  },
  {
    name: 'Muscle Groups',
    description: 'Explore detailed information about different muscle groups and their exercises.',
    icon: ChartBarIcon,
    href: '/muscle-groups',
  },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your Personal Workout Journey
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Track your workouts, understand muscle groups, and achieve your fitness goals with our comprehensive workout plan.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <Link key={feature.name} href={feature.href} className="group">
                  <div className="flex flex-col gap-6 rounded-lg p-6 transition-all duration-200 hover:bg-gray-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-700">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <dt className="text-lg font-semibold leading-7 text-gray-900">
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  </div>
                </Link>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 