import {createTheme} from '@mui/material/styles';
import { grey,blue } from '@mui/material/colors';

const theme = createTheme({
    components: {
        MuiTypography: {
          defaultProps: {
            variantMapping: {
              h1: 'h1',
              h2: 'h2',
              h3: 'h3',
              h4: 'h4',
              h5: 'h5',
              h6: 'h6',
              paragraph: 'p',
              subtitle2: 'h2',
              body1: 'span',
              body2: 'span',
            },
          },
        },
      },
    palette: {
      primary: {
        main: grey[900],border:blue[500]
      },
    },
  });
  export default theme
