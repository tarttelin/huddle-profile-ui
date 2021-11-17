import react from "react";
import dayjs from "dayjs";

describe("convert auth payload into user object", () => {
    it("extracts the expiry date", () => {
        const expectedDate = dayjs("2021-04-01T12:00:12.000Z");
        console.log(expectedDate.unix());
        expect(expectedDate).toEqual(dayjs.unix(1617278412))
    });
});