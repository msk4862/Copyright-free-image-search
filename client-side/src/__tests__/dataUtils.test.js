import React from "react";
import { cleanup } from "@testing-library/react";
import {
    sortData,
    applyOrientationFilter,
    applyOwnerFilter,
    filterData,
} from "../uitilities/dataUtils";
import {
    SORT_KEYS,
    ORIENTATION_FILTER,
    OWNER_FILTER,
} from "../uitilities/Constants";

const sampleImageData = [
    {
        key: "1",
        width: 230,
        height: 300,
        url: "testurl",
        previewURL: "testurl",
        author: "testauthor",
        likes: 200,
        service: "Pexels",
    },
    {
        key: "2",
        width: 1030,
        height: 3000,
        url: "testurl",
        previewURL: "testurl",
        author: "testauthor",
        likes: 230,
        service: "Pixabay",
    },
    {
        key: "3",
        width: 2030,
        height: 1300,
        url: "testurl",
        previewURL: "testurl",
        author: "testauthor",
        likes: 1200,
        service: "Unsplash",
    },
    {
        key: "4",
        width: 1230,
        height: 2300,
        url: "testurl",
        previewURL: "testurl",
        author: "testauthor",
        likes: 26500,
        service: "Pixabay",
    },
    {
        key: "5",
        width: 4230,
        height: 2300,
        url: "testurl",
        previewURL: "testurl",
        author: "testauthor",
        likes: 200,
        service: "Pexels",
    },
];

afterEach(cleanup);
describe("Testing data utility methods", () => {
    test("Testing filterData method", () => {
        const filterKeys = {
            // Pixels
            Owner: OWNER_FILTER.VALUES[2],
            // Potrait
            Orientation: ORIENTATION_FILTER.VALUES[1],
        };
        const filteredData = filterData(sampleImageData, filterKeys);

        expect(filteredData).toHaveLength(1);
    });
    test("Testing applyOrientationFilter method", () => {
        // Landscape
        let key = ORIENTATION_FILTER.VALUES[0];
        const filteredDataLanscape = applyOrientationFilter(
            sampleImageData,
            key
        );

        // Potrait
        key = ORIENTATION_FILTER.VALUES[1];
        const filteredDataPotrait = applyOrientationFilter(
            sampleImageData,
            key
        );

        expect(filteredDataLanscape).toHaveLength(2);
        expect(filteredDataPotrait).toHaveLength(3);
    });
    test("Testing applyOwnerFilter method", () => {
        // Pixabay
        const key = OWNER_FILTER.VALUES[0];
        const filteredData = applyOwnerFilter(sampleImageData, key);

        expect(filteredData).toHaveLength(2);
    });
    test("Testing sortData method", () => {
        // by likes
        const sortKey = SORT_KEYS[0];

        const sortedData = sampleImageData.sort((img1, img2) => {
            return img2.likes - img1.likes;
        });
        const res = sortData(sampleImageData, sortKey);

        expect(res).toEqual(sortedData);
    });
});
