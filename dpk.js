const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TrivialPartitionKey = "0";
  const MaxPartitionKeyLength = 256;
  let useKeyAsHash = false;
  if (!event) {
    return TrivialPartitionKey;
  }

  const keyToHash = event.partitionKey ?? event;
  
  if (event.partitionKey) {
    if (typeof keyToHash !== "string") {
      return JSON.stringify(keyToHash);
    }
    if (keyToHash.length < MaxPartitionKeyLength) {
      return keyToHash;
    } else {
      useKeyAsHash = true;
    }
  }
  
  const data = useKeyAsHash ? keyToHash : JSON.stringify(keyToHash);

  const candidate = crypto.createHash("sha3-512").update(data).digest("hex");

  return candidate;
};