import styled from '@emotion/styled';
import { LinearProgress } from '@mui/material';
import { beige, blue } from '../../constants/colors';

export const StyledLinearProgress = styled(LinearProgress)({
    backgroundColor: beige,
    '& .MuiLinearProgress-bar': {
        backgroundColor: blue,
    },
});
