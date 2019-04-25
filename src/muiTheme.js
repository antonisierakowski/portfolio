import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "1.1rem",
            }
        }
    }
})

export default theme;