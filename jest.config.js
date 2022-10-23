module.exports = {
    coverageDirectory: "coverage/unit",
    collectCoverageFrom: ["src/**.js"],
    coverageThreshold: {
        global: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100,
        },
    },
    moduleDirectories: ["node_modules", "src"],
    modulePaths: ["<rootDir>/src"],
    testPathIgnorePatterns: ["<rootDir>/node_modules/"],
};
