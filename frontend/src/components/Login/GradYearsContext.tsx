import { createContext } from 'react';

const availableGradYears = [
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030',
];

const GradYearsContext = createContext(availableGradYears);

export default GradYearsContext