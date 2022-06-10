module.exports = {
  rootDir: "../../",
  preset: "ts-jest",
  restoreMocks: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
