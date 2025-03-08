export interface MuscleSubgroup {
    name: string;
    muscles?: string[];
    subgroups?: MuscleSubgroup[];
}

export interface MuscleGroup {
    name: string;
    muscles?: string[];
    subgroups?: MuscleSubgroup[];
}

export const muscleGroups: MuscleGroup[] = [
    {
        name: "Upper Body",
        subgroups: [
            {
                name: "Back",
                subgroups: [
                    {
                        name: "Upper Back",
                        muscles: ["Trapezius (Upper, Middle, Lower)", "Rhomboids (Major & Minor)"]
                    },
                    {
                        name: "Lats",
                        muscles: ["Upper Lats", "Lower Lats"]
                    },
                    {
                        name: "Lower Back",
                        muscles: ["Erector Spinae", "Quadratus Lumborum"]
                    }
                ]
            },
            {
                name: "Shoulders",
                muscles: [
                    "Front Deltoid (Anterior Deltoid)",
                    "Side Deltoid (Lateral Deltoid)",
                    "Rear Deltoid (Posterior Deltoid)"
                ]
            },
            {
                name: "Chest",
                muscles: [
                    "Upper Chest (Clavicular Head of Pectoralis Major)",
                    "Mid Chest (Sternal Head of Pectoralis Major)",
                    "Lower Chest (Costal Head of Pectoralis Major)",
                    "Serratus Anterior"
                ]
            },
            {
                name: "Arms",
                subgroups: [
                    {
                        name: "Biceps",
                        muscles: [
                            "Biceps Brachii (Long Head, Short Head)",
                            "Brachialis",
                            "Brachioradialis"
                        ]
                    },
                    {
                        name: "Triceps",
                        muscles: ["Long Head", "Lateral Head", "Medial Head"]
                    },
                    {
                        name: "Forearms",
                        muscles: [
                            "Flexors (e.g., Flexor Carpi Ulnaris, Flexor Digitorum)",
                            "Extensors (e.g., Extensor Carpi Radialis, Extensor Digitorum)"
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Core",
        muscles: [
            "Rectus Abdominis (Upper & Lower Abs)",
            "Obliques (Internal & External)",
            "Transverse Abdominis",
            "Lower Back (Erector Spinae)"
        ]
    },
    {
        name: "Lower Body",
        subgroups: [
            {
                name: "Glutes & Hips",
                muscles: [
                    "Gluteus Maximus",
                    "Gluteus Medius",
                    "Gluteus Minimus",
                    "Hip Flexors"
                ]
            },
            {
                name: "Legs",
                subgroups: [
                    {
                        name: "Quadriceps",
                        muscles: [
                            "Rectus Femoris",
                            "Vastus Lateralis",
                            "Vastus Medialis",
                            "Vastus Intermedius"
                        ]
                    },
                    {
                        name: "Hamstrings",
                        muscles: [
                            "Biceps Femoris (Long & Short Head)",
                            "Semitendinosus",
                            "Semimembranosus"
                        ]
                    }
                ]
            },
            {
                name: "Calves",
                muscles: [
                    "Gastrocnemius (Medial & Lateral Head)",
                    "Soleus",
                    "Tibialis Anterior"
                ]
            }
        ]
    }
]; 