import index from "../assets/json/index.json";

export const toggleActive = (stateActive) => (stateActive ? active : "");
export const useIndexData = (category) => index.index.find((d) => d.category === category);
