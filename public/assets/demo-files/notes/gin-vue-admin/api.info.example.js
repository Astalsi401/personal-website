import service from "@/utils/request";

export const createTest = (data) => service({ url: "/test/createTest", method: "post", data });

export const getTestList = (params) => service({ url: "/test/getTestList", method: "get", params });
