const useDarkMode = () => {
    const isDarkMode = useState("isDark", () => false);

    const toggle = () => isDarkMode.value = !isDarkMode.value;

    return {
        isDarkMode,
        toggle
    }
}

export default useDarkMode;