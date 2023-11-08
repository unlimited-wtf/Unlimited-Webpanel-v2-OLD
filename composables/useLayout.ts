export const useLayout = () => {
    const leftDrawerOpen = useState('leftDrawerOpen', () => false);

    const toggleLeftDrawer = () => {
        leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
        leftDrawerOpen,
        toggleLeftDrawer
    };
};
