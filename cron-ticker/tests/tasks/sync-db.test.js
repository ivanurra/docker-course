const { syncDB } = require("../../tasks/sync-db");

describe("Tests in Sync-DB", () => {
  test("You must run the process twice", () => {
    syncDB();
    const times = syncDB();
    expect(times).toBe(2);
  });
});
