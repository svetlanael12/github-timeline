import { PieValueType } from '@mui/x-charts';

export const calculatePartOfDiagrame = (languageRepositories: (string | null)[]): PieValueType[] => {
    const object = languageRepositories.reduce((acc: any, i: any) => {
        if (acc.hasOwnProperty(i)) {
            acc[i] += 1;
        } else {
            acc[i] = 1;
        }
        return acc;
    }, {});

    return Object.keys(object).map((key, ind) => {
        const label = key === 'null' ? 'Неизвестный' : key;

        return {
            id: ind,
            value: object[key],
            label: label,
        };
    });
};
