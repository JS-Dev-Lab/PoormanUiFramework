async function getEngine(type) {
    switch (type) {
        case "vue":
            const { engine } = await import("./engines/VueEngine");
            return engine;

        case "react":
            const { engine: reactEngine } = await import("./engines/ReactEngine");
            return reactEngine;

        case "pm":
            const { engine: pmEngine } = await import("./engines/PmEngine");
            return pmEngine;
    }
    return null;
}

export {
    getEngine
}