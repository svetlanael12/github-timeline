import { styled, TextField } from '@mui/material';
import { beige, blue } from '../../constants/colors';

export const StyledTextField = styled(TextField)({
    '& input': {
        color: blue,
    },
    '& label': {
        color: blue,
    },
    '& label.Mui-focused': {
        color: beige,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: beige,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: beige,
        },
        '&:hover fieldset': {
            borderColor: beige,
        },
        '&.Mui-focused fieldset': {
            borderColor: beige,
        },
    },
});
