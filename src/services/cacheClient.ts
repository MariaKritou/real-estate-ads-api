import NodeCache from "node-cache";

// The stdTTL option sets a default TTL for all cache entries (in seconds).
// Here, we set it to 7200 seconds (2 hours).
const cache = new NodeCache({ stdTTL: 7200 });

export { cache };
