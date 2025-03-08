export interface Exercise {
    name: string;
    targetMuscles: string;
    sets?: number;
    reps?: string;
    restTime?: string;
    videoUrl?: string;
}

export interface WorkoutDay {
    day: number;
    name: string;
    exercises: Exercise[];
}

export interface WorkoutWeek {
    week: number;
    days: WorkoutDay[];
}

export const workoutPlan: {
    overview: {
        trainingSplit: string;
        goal: string;
        repsAndSets: string;
        restTime: string;
        maxExercises: number;
    };
    weeks: WorkoutWeek[];
} = {
    overview: {
        trainingSplit: "6 Days a Week (Push, Pull, Legs - Repeated) over 2 Weeks",
        goal: "Muscle Gain (Hypertrophy & Strength)",
        repsAndSets: "3-5 sets, 6-12 reps (hypertrophy focus)",
        restTime: "60-90s (hypertrophy), 2-3 min (strength focus)",
        maxExercises: 7
    },
    weeks: [
        {
            week: 1,
            days: [
                {
                    day: 1,
                    name: "Push (Chest, Shoulders, Triceps)",
                    exercises: [
                        {
                            name: "Flat Barbell Bench Press",
                            targetMuscles: "Chest, Triceps",
                            sets: 4,
                            reps: "8-12",
                            restTime: "2-3 min",
                            videoUrl: "https://www.youtube.com/watch?v=rT7DgCr-3pg"
                        },
                        {
                            name: "Seated Overhead Barbell Press",
                            targetMuscles: "Shoulders",
                            sets: 4,
                            reps: "8-12",
                            restTime: "2-3 min",
                            videoUrl: "https://www.youtube.com/watch?v=2yjwXTZQDDI"
                        },
                        {
                            name: "Incline Dumbbell Press",
                            targetMuscles: "Upper Chest, Triceps",
                            sets: 3,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=8iPEnn-ltC8"
                        },
                        {
                            name: "Lateral Raises",
                            targetMuscles: "Lateral Deltoid",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=3VcKaXpzqRo"
                        },
                        {
                            name: "Dips (Weighted)",
                            targetMuscles: "Lower Chest, Triceps",
                            sets: 3,
                            reps: "8-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=2z8JmcrW-As"
                        },
                        {
                            name: "Overhead Dumbbell Extension",
                            targetMuscles: "Triceps",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=YbX7Wd8jQ-Q"
                        },
                        {
                            name: "Tricep Rope Pushdowns",
                            targetMuscles: "Triceps",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=vB5OHsJ3EME"
                        }
                    ]
                },
                {
                    day: 2,
                    name: "Pull (Back, Biceps, Rear Delts, Forearms)",
                    exercises: [
                        {
                            name: "Deadlifts",
                            targetMuscles: "Erector Spinae, Lats, Traps",
                            sets: 4,
                            reps: "6-8",
                            restTime: "3 min",
                            videoUrl: "https://www.youtube.com/watch?v=op9kVnSso6Q"
                        },
                        {
                            name: "Pull-Ups (Weighted)",
                            targetMuscles: "Lats, Rhomboids, Traps",
                            sets: 4,
                            reps: "8-12",
                            restTime: "2 min",
                            videoUrl: "https://www.youtube.com/watch?v=eGo4IYlbE5g"
                        },
                        {
                            name: "Face Pulls",
                            targetMuscles: "Rear Delts, Traps, Rotator Cuff",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=rep-qVOkqgk"
                        },
                        {
                            name: "Barbell Rows",
                            targetMuscles: "Lats, Rhomboids",
                            sets: 3,
                            reps: "8-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=kBWAon7ItDw"
                        },
                        {
                            name: "Barbell Curls",
                            targetMuscles: "Biceps",
                            sets: 3,
                            reps: "10-12",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=kwG2ipFRgfo"
                        },
                        {
                            name: "Hammer Curls",
                            targetMuscles: "Biceps, Brachialis",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=zC3nLlEvin4"
                        },
                        {
                            name: "Reverse Wrist Curls",
                            targetMuscles: "Forearms",
                            sets: 3,
                            reps: "15-20",
                            restTime: "45s",
                            videoUrl: "https://www.youtube.com/watch?v=FW7URAaC-vE"
                        }
                    ]
                },
                {
                    day: 3,
                    name: "Legs (Hamstring & Core Focus)",
                    exercises: [
                        {
                            name: "Romanian Deadlifts",
                            targetMuscles: "Hamstrings, Glutes",
                            sets: 4,
                            reps: "8-10",
                            restTime: "2-3 min",
                            videoUrl: "https://www.youtube.com/watch?v=JCXUYuzwNrM"
                        },
                        {
                            name: "Leg Press (Feet High Position)",
                            targetMuscles: "Hamstrings",
                            sets: 4,
                            reps: "10-12",
                            restTime: "2 min",
                            videoUrl: "https://www.youtube.com/watch?v=IZxyjW7MPJQ"
                        },
                        {
                            name: "Step-Ups (Weighted)",
                            targetMuscles: "Quads, Glutes",
                            sets: 3,
                            reps: "12 each leg",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=WCFCdxzFBa4"
                        },
                        {
                            name: "Standing Calf Raises",
                            targetMuscles: "Calves",
                            sets: 4,
                            reps: "15-20",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=YMmgqO8Jo-k"
                        },
                        {
                            name: "Seated Calf Raises",
                            targetMuscles: "Calves",
                            sets: 3,
                            reps: "15-20",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=JbyjNymZOt0"
                        },
                        {
                            name: "Russian Twists",
                            targetMuscles: "Core",
                            sets: 3,
                            reps: "20 total touches",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=wkD8rjkodUI"
                        },
                        {
                            name: "Hanging Leg Raises",
                            targetMuscles: "Abs",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=hdng3Nm1x_E"
                        }
                    ]
                },
                {
                    day: 4,
                    name: "Push (Variation & Overload)",
                    exercises: [
                        {
                            name: "Incline Barbell Bench Press",
                            targetMuscles: "Upper Chest",
                            sets: 4,
                            reps: "8-10",
                            restTime: "2-3 min",
                            videoUrl: "https://www.youtube.com/watch?v=jPLdzuHckI8"
                        },
                        {
                            name: "Dumbbell Shoulder Press",
                            targetMuscles: "Shoulders",
                            sets: 4,
                            reps: "10-12",
                            restTime: "2 min",
                            videoUrl: "https://www.youtube.com/watch?v=qEwKCR5JCog"
                        },
                        {
                            name: "Chest Flyes",
                            targetMuscles: "Chest",
                            sets: 3,
                            reps: "12-15",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=eozdVDA78K0"
                        },
                        {
                            name: "Arnold Press",
                            targetMuscles: "Shoulders",
                            sets: 3,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=6Z15_WdXmVw"
                        },
                        {
                            name: "Close-Grip Bench Press",
                            targetMuscles: "Triceps",
                            sets: 3,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=nEF0bv2FW94"
                        },
                        {
                            name: "Cable Lateral Raises",
                            targetMuscles: "Lateral Delts",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=0dTh4BStEBE"
                        },
                        {
                            name: "Dips (Weighted)",
                            targetMuscles: "Lower Chest, Triceps",
                            sets: 3,
                            reps: "8-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=2z8JmcrW-As"
                        }
                    ]
                },
                {
                    day: 5,
                    name: "Pull (Strength & Isolation)",
                    exercises: [
                        {
                            name: "Snatch-Grip Deadlifts",
                            targetMuscles: "Upper Back, Lats",
                            sets: 4,
                            reps: "6-8",
                            restTime: "3 min",
                            videoUrl: "https://www.youtube.com/watch?v=FkRkPigvO9Y"
                        },
                        {
                            name: "Lat Pulldowns",
                            targetMuscles: "Lats, Teres Major",
                            sets: 4,
                            reps: "10-12",
                            restTime: "2 min",
                            videoUrl: "https://www.youtube.com/watch?v=CAwf7n6Luuc"
                        },
                        {
                            name: "Dumbbell Rows",
                            targetMuscles: "Lats, Rhomboids",
                            sets: 3,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=roCP6wCXPqo"
                        },
                        {
                            name: "Rear Delt Machine Flyes",
                            targetMuscles: "Rear Delts",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=6yMdhi2DVao"
                        },
                        {
                            name: "Preacher Curls",
                            targetMuscles: "Biceps",
                            sets: 3,
                            reps: "10-12",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=fIWP-FRFNU0"
                        },
                        {
                            name: "Zottman Curls",
                            targetMuscles: "Biceps & Forearms",
                            sets: 3,
                            reps: "10-12",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=ZrpRBgswtHs"
                        },
                        {
                            name: "Farmer's Walk",
                            targetMuscles: "Grip Strength",
                            sets: 3,
                            reps: "30-40 yards",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=Fkzk_RqlYig"
                        }
                    ]
                },
                {
                    day: 6,
                    name: "Legs (Explosive Strength & Stability)",
                    exercises: [
                        {
                            name: "Front Squats",
                            targetMuscles: "Quads, Core",
                            sets: 4,
                            reps: "6-8",
                            restTime: "2-3 min",
                            videoUrl: "https://www.youtube.com/watch?v=v-mQm_droHg"
                        },
                        {
                            name: "Trap Bar Deadlifts",
                            targetMuscles: "Glutes, Hamstrings",
                            sets: 4,
                            reps: "8-10",
                            restTime: "2-3 min",
                            videoUrl: "https://www.youtube.com/watch?v=JpFxzeNwESk"
                        },
                        {
                            name: "Walking Lunges",
                            targetMuscles: "Quads, Glutes",
                            sets: 3,
                            reps: "12 steps each leg",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=L8fvypPrzzs"
                        },
                        {
                            name: "Seated Leg Curls",
                            targetMuscles: "Hamstrings",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=ELOCsoDSmrg"
                        },
                        {
                            name: "Standing Calf Raises",
                            targetMuscles: "Calves",
                            sets: 4,
                            reps: "15-20",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=YMmgqO8Jo-k"
                        },
                        {
                            name: "Toe Raises",
                            targetMuscles: "Tibialis Anterior",
                            sets: 3,
                            reps: "15-20",
                            restTime: "45s",
                            videoUrl: "https://www.youtube.com/watch?v=gNS_QjGAs_k"
                        },
                        {
                            name: "Hanging Knee Raises",
                            targetMuscles: "Abs",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=Pr1ieGZ5atk"
                        }
                    ]
                }
            ]
        },
        {
            week: 2,
            days: [
                {
                    day: 1,
                    name: "Push (Strength Focus)",
                    exercises: [
                        {
                            name: "Flat Dumbbell Press",
                            targetMuscles: "Chest",
                            sets: 4,
                            reps: "8-10",
                            restTime: "2-3 min",
                            videoUrl: "https://www.youtube.com/watch?v=VmB1G1K7v94"
                        },
                        {
                            name: "Standing Overhead Press",
                            targetMuscles: "Shoulders",
                            sets: 4,
                            reps: "6-8",
                            restTime: "2-3 min",
                            videoUrl: "https://www.youtube.com/watch?v=2yjwXTZQDDI"
                        },
                        {
                            name: "Incline Machine Press",
                            targetMuscles: "Upper Chest",
                            sets: 3,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=ig0NwTFNxF8"
                        },
                        {
                            name: "Cable Lateral Raises",
                            targetMuscles: "Lateral Delts",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=0dTh4BStEBE"
                        },
                        {
                            name: "Dips",
                            targetMuscles: "Triceps",
                            sets: 3,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=2z8JmcrW-As"
                        },
                        {
                            name: "Overhead Rope Extension",
                            targetMuscles: "Triceps",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=vB5OHsJ3EME"
                        },
                        {
                            name: "Tricep Kickbacks",
                            targetMuscles: "Triceps",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=6SS6K3lAwZ8"
                        }
                    ]
                },
                {
                    day: 2,
                    name: "Pull (Back Width Focus)",
                    exercises: [
                        {
                            name: "Weighted Chin-Ups",
                            targetMuscles: "Biceps, Lats",
                            sets: 4,
                            reps: "8-10",
                            restTime: "2 min",
                            videoUrl: "https://www.youtube.com/watch?v=eGo4IYlbE5g"
                        },
                        {
                            name: "Cable Rows",
                            targetMuscles: "Back",
                            sets: 4,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=GZbfZ033f74"
                        },
                        {
                            name: "Face Pulls",
                            targetMuscles: "Rear Delts",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=rep-qVOkqgk"
                        },
                        {
                            name: "T-Bar Rows",
                            targetMuscles: "Back",
                            sets: 3,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=j3Igk5nyZE4"
                        },
                        {
                            name: "EZ Bar Curls",
                            targetMuscles: "Biceps",
                            sets: 3,
                            reps: "10-12",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=kwG2ipFRgfo"
                        },
                        {
                            name: "Reverse Curls",
                            targetMuscles: "Forearms",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=nRgxYX2Ve9w"
                        },
                        {
                            name: "Wrist Curls",
                            targetMuscles: "Forearms",
                            sets: 3,
                            reps: "15-20",
                            restTime: "45s",
                            videoUrl: "https://www.youtube.com/watch?v=krZ4JRsUAJQ"
                        }
                    ]
                },
                {
                    day: 3,
                    name: "Legs (Hypertrophy Focus)",
                    exercises: [
                        {
                            name: "Front Squats",
                            targetMuscles: "Quads, Core",
                            sets: 4,
                            reps: "8-10",
                            restTime: "2 min",
                            videoUrl: "https://www.youtube.com/watch?v=v-mQm_droHg"
                        },
                        {
                            name: "Bulgarian Split Squats",
                            targetMuscles: "Quads, Glutes",
                            sets: 3,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=2C-uNgKwPLE"
                        },
                        {
                            name: "Seated Calf Raises",
                            targetMuscles: "Calves",
                            sets: 4,
                            reps: "15-20",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=JbyjNymZOt0"
                        }
                    ]
                },
                {
                    day: 4,
                    name: "Push (Volume & Hypertrophy)",
                    exercises: [
                        {
                            name: "Incline Dumbbell Press",
                            targetMuscles: "Upper Chest",
                            sets: 4,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=8iPEnn-ltC8"
                        },
                        {
                            name: "Dumbbell Shoulder Press",
                            targetMuscles: "Shoulders",
                            sets: 4,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=qEwKCR5JCog"
                        },
                        {
                            name: "Pec Deck Machine",
                            targetMuscles: "Chest",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=xUm0BiZCWlQ"
                        },
                        {
                            name: "Arnold Press",
                            targetMuscles: "Shoulders",
                            sets: 3,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=6Z15_WdXmVw"
                        },
                        {
                            name: "Tricep Dips",
                            targetMuscles: "Triceps",
                            sets: 3,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=2z8JmcrW-As"
                        },
                        {
                            name: "Overhead Cable Extensions",
                            targetMuscles: "Triceps",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=vB5OHsJ3EME"
                        },
                        {
                            name: "Lateral Raises",
                            targetMuscles: "Shoulders",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=3VcKaXpzqRo"
                        }
                    ]
                },
                {
                    day: 5,
                    name: "Pull (Back Thickness Focus)",
                    exercises: [
                        {
                            name: "Rack Pulls",
                            targetMuscles: "Lower Back, Traps",
                            sets: 4,
                            reps: "6-8",
                            restTime: "3 min",
                            videoUrl: "https://www.youtube.com/watch?v=8LP5qnMR1h4"
                        },
                        {
                            name: "Lat Pulldown",
                            targetMuscles: "Lats",
                            sets: 4,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=CAwf7n6Luuc"
                        },
                        {
                            name: "Dumbbell Shrugs",
                            targetMuscles: "Traps",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=cJRVVxmytaM"
                        },
                        {
                            name: "Seated Cable Rows",
                            targetMuscles: "Back",
                            sets: 3,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=GZbfZ033f74"
                        },
                        {
                            name: "Preacher Curls",
                            targetMuscles: "Biceps",
                            sets: 3,
                            reps: "10-12",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=fIWP-FRFNU0"
                        },
                        {
                            name: "Hammer Curls",
                            targetMuscles: "Biceps, Forearms",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=zC3nLlEvin4"
                        },
                        {
                            name: "Reverse Wrist Curls",
                            targetMuscles: "Forearms",
                            sets: 3,
                            reps: "15-20",
                            restTime: "45s",
                            videoUrl: "https://www.youtube.com/watch?v=krZ4JRsUAJQ"
                        }
                    ]
                },
                {
                    day: 6,
                    name: "Legs (Quad Dominant)",
                    exercises: [
                        {
                            name: "Back Squats",
                            targetMuscles: "Quads",
                            sets: 4,
                            reps: "8-10",
                            restTime: "2-3 min",
                            videoUrl: "https://www.youtube.com/watch?v=1oed-UmAxFs"
                        },
                        {
                            name: "Bulgarian Split Squats",
                            targetMuscles: "Quads, Glutes",
                            sets: 3,
                            reps: "10-12",
                            restTime: "90s",
                            videoUrl: "https://www.youtube.com/watch?v=2C-uNgKwPLE"
                        },
                        {
                            name: "Leg Extensions",
                            targetMuscles: "Quads",
                            sets: 3,
                            reps: "12-15",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=YyvSfVjQeL0"
                        },
                        {
                            name: "Calf Raises (Smith Machine)",
                            targetMuscles: "Calves",
                            sets: 4,
                            reps: "15-20",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=YMmgqO8Jo-k"
                        },
                        {
                            name: "Standing Tibialis Raises",
                            targetMuscles: "Tibialis Anterior",
                            sets: 3,
                            reps: "15-20",
                            restTime: "45s",
                            videoUrl: "https://www.youtube.com/watch?v=gNS_QjGAs_k"
                        },
                        {
                            name: "Ab Rollouts",
                            targetMuscles: "Core",
                            sets: 3,
                            reps: "10-12",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=A2xRx7dGWaE"
                        },
                        {
                            name: "Plank Holds",
                            targetMuscles: "Core",
                            sets: 3,
                            reps: "30-60 seconds",
                            restTime: "60s",
                            videoUrl: "https://www.youtube.com/watch?v=ASdvN_XEl_c"
                        }
                    ]
                }
            ]
        }
    ]
}; 