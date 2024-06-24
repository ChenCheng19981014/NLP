export const getEnvMode = () => {
    return (import.meta as any).env.VITE_APP_PD_MODE;
};
export const defRunSceneConfig = {
    renderConfig: {
        matrixAutoUpdate: true,
        scriptFrame: 60,
        event: {
            ignores: ["resize"],
        },
    },
    showFps: getEnvMode() === "local",

    camera: {
        showBackground: true,
    },
};
