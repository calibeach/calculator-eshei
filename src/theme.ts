interface DefaultTheme {
    background: string,
    text: string,
    active: string,
    input: {
        background: string,
        color: string
    }
    button: {
        background: {
            miscellaneous: string,
            number: string,
            operator: string
        }
        color: {
            miscellaneous: string,
            number: string,
            operator: string
        }
    }
}


const theme: DefaultTheme = {
    background: "#1C1C1C",
    text: "#FFFFFF",
    active: "#E2E2E2AD",
    input: {
        background: "#1C1C1C",
        color: "#FFFFFF"
    },
    button: {
        background: {
            miscellaneous: "#D4D4D2",
            number: "#505050",
            operator: "#FF9500"
        },
        color: {
            miscellaneous: "#000000",
            number: "#FFFFFF",
            operator: "#FFFFFF"
        }
    }
}

export { theme }