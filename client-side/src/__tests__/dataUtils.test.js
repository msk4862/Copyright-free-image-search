import React from "react";
import { cleanup } from "@testing-library/react";
import { dataParser, applyFilter } from "../uitilities/dataUtils";

const data = [
    {
        key: "1",
        url: "testurl",
        previewURL: "testurl",
        author: "testauthor",
        service: "Pexels",
    },
    {
        key: "2",
        url: "testurl",
        previewURL: "testurl",
        author: "testauthor",
        service: "Pixabay",
    },
    {
        key: "3",
        url: "testurl",
        previewURL: "testurl",
        author: "testauthor",
        service: "Unsplash",
    },
    {
        key: "4",
        url: "testurl",
        previewURL: "testurl",
        author: "testauthor",
        service: "Pixabay",
    },
    {
        key: "5",
        url: "testurl",
        previewURL: "testurl",
        author: "testauthor",
        service: "Pexels",
    },
];

afterEach(cleanup);
describe("Testing data utility methods", () => {
    test("Testing applyFilter method", () => {
        const key = "Unsplash";
        const filteredData = applyFilter(data, key);

        expect(filteredData).toHaveLength(1);
    });

    test("Testing dataParser method", () => {
        const filterKeys = ["Unsplash"];
        const sortKey = "";

        const filteredData = dataParser(data, filterKeys, sortKey);

        expect(filteredData).toHaveLength(1);
    });
});
