const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  const NumberHash = '48c8947f69c054a5caa934674ce8881d02bb18fb59d5a63eeaddff735b0e9801e87294783281ae49fc8287a0fd86779b27d7972d3e84f0fa0d826d7cb67dfefc'
  const StringHash = '3f0ff6ca6d8ce3a49489b0f6dbfa9bf9b0c7f037f51a7d49af25778f1172c6c9934eb25fd041b14f2ee14dd13d3559f2d12bb2d470ade89cd046933d555a99b4'
  const LongStringKey = '12345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345'
  const LongNumberKey = 12345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345
  const LongKeyHash = '7c363d052585db2790f929df70bec60ae515e322a194e05f1bf415b705b4e35aacbec60ba3dec930b270c4681419c9fd6a4b5ce872bdea2633ee0ff6e4ee83d3'
  const LongPartitionStringKeyHash = "e5dfaaf826dfd2c92c48853e679ddb8381c32e5b1d115360e0371b9a85c9d0137aceeb0132d1f3a4beab08806c90c524b2b9d128eb2d6d5ae1446c3174ae15c4"
  const LongPartitionNumberKeyHash = "1.2345123451234512e+259"
  const NullHash = '58540d4d440df8c6c6da0d79cfce715bc92953c6cde8be9f749790004ef2d5a7322d0fd5170eac9a37d57ee0cc975cfca068a60b01622529d9e0fd657f71b8e2'
  const UndefinedHash = 'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862'
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns the literal '0' when given null", () => {
    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe("0");
  });
  it("Returns the literal '0' when given undefined", () => {
    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe("0");
  });
  it("Returns correct key when given 123", () => {
    const trivialKey = deterministicPartitionKey(123);
    expect(trivialKey).toBe(NumberHash);
  });
  it("Returns correct key when given '123'", () => {
    const trivialKey = deterministicPartitionKey('123');
    expect(trivialKey).toBe(StringHash);
  });
  it("Returns correct key when given {partitionKey:'123'}", () => {
    const partitionKey = '123'
    const trivialKey = deterministicPartitionKey({partitionKey});
    expect(trivialKey).toBe(partitionKey);
  });
  it("Returns correct key when given {partitionKey:123}", () => {
    const partitionKey = 123
    const trivialKey = deterministicPartitionKey({partitionKey});
    expect(trivialKey).toBe(partitionKey.toString());
  });
  it("Returns correct key when given {partitionKey:{}}", () => {
    const partitionKey = {}
    const trivialKey = deterministicPartitionKey({partitionKey});
    expect(trivialKey).toBe(JSON.stringify(partitionKey));
  });
  it("Returns correct key when given {partitionKey:null}", () => {
    const partitionKey = null
    const trivialKey = deterministicPartitionKey({partitionKey});
    expect(trivialKey).toBe(NullHash);
  });
  it("Returns correct key when given {partitionKey:undefined}", () => {
    const partitionKey = undefined
    const trivialKey = deterministicPartitionKey({partitionKey});
    expect(trivialKey).toBe(UndefinedHash);
  });
  it("Returns correct key when given long key", () => {
    const trivialKey = deterministicPartitionKey(LongStringKey);
    expect(trivialKey).toBe(LongKeyHash);
  });
  it("Returns correct key when given long string key in partitionKey", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: LongStringKey});
    expect(trivialKey).toBe(LongPartitionStringKeyHash);
  });
  it("Returns correct key when given long number key in partitionKey", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: LongNumberKey});
    expect(trivialKey).toBe(LongPartitionNumberKeyHash);
  });
});
