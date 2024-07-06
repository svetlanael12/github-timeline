import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import { useStore } from '../../../../../hooks/useStore';
import { calculatePartOfDiagrame } from '../../../../../utils/calculatePartOfDiagrame';
import { PieChart } from '@mui/x-charts';
import { Box } from '@mui/material';

export const LanguageRepositoriesInfo = observer(() => {
    const { repositories } = useStore().repositoryStore;

    const languageRepositories = useMemo(() => {
        return repositories.map((repo) => repo.language);
    }, [repositories]);

    const data = calculatePartOfDiagrame(languageRepositories);

    const series = [
        {
            data,
            innerRadius: 25,
            outerRadius: 105,
            paddingAngle: 5,
            cornerRadius: 4,
        },
    ];

    return (
        <Box>
            <PieChart series={series} width={500} height={300} />
        </Box>
    );
});
