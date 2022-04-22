import CSS from 'csstype'

export const boxStyles: CSS.Properties = {
    height: '100vh',
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

export const paperStyles: CSS.Properties = {
    width: '80rem',
    height: '53rem',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 1fr',
    padding: '3rem',
}

export const buttonBoxStyles: CSS.Properties = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
}

export const formBoxStyles: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}
