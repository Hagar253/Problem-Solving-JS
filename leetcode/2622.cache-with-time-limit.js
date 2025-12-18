/**
 * Problem: Time Limited Cache
 * Platform: LeetCode
 * Difficulty: Medium
 * Description:
 * Implement a cache that stores key-value pairs with a time-to-live (TTL).
 * Each key expires after a given duration in milliseconds.  
 * The cache should support:
 * - `set(key, value, duration)` → stores a key with TTL, returns true if key already existed
 * - `get(key)` → returns value if key exists and not expired, else -1
 * - `count()` → returns number of unexpired keys
 */

/* -------------------------
   Solution 1 — Using Map with expiration timestamps
-------------------------- */
var TimeLimitedCache = function() {
    this.cache = new Map(); // Store key → { value, expiresAt }
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const currentTime = Date.now();
    const expiresAt = currentTime + duration;
    const existing = this.cache.get(key);

    const valid = existing !== undefined && existing.expiresAt > currentTime;

    this.cache.set(key, { value, expiresAt });

    return valid;
};

TimeLimitedCache.prototype.get = function(key) {
    const currentTime = Date.now();
    const entry = this.cache.get(key);

    if (!entry || entry.expiresAt <= currentTime) {
        this.cache.delete(key); // cleanup expired key
        return -1;
    }

    return entry.value;
};

TimeLimitedCache.prototype.count = function() {
    const currentTime = Date.now();
    let count = 0;

    for (const [key, entry] of this.cache) {
        if (entry.expiresAt > currentTime) {
            count++;
        } else {
            this.cache.delete(key); // cleanup expired key
        }
    }

    return count;
};

/* -------------------------
   Solution 2 — Using Map with setTimeout for auto-expiration
-------------------------- */
var TimeLimitedCacheAuto = function() {
    this.cache = new Map();   // key → value
    this.timers = new Map();  // key → timeoutID
};

TimeLimitedCacheAuto.prototype.set = function(key, value, duration) {
    const existed = this.cache.has(key);

    if (this.timers.has(key)) {
        clearTimeout(this.timers.get(key)); // clear previous timer
    }

    this.cache.set(key, value);

    const timeoutID = setTimeout(() => {
        this.cache.delete(key);
        this.timers.delete(key);
    }, duration);

    this.timers.set(key, timeoutID);

    return existed;
};

TimeLimitedCacheAuto.prototype.get = function(key) {
    return this.cache.has(key) ? this.cache.get(key) : -1;
};

TimeLimitedCacheAuto.prototype.count = function() {
    return this.cache.size;
};

/**
 * Example Usage:
 * // Solution 1
 * const cache1 = new TimeLimitedCache();
 * cache1.set(1, 42, 1000); // false
 * cache1.get(1);           // 42
 * cache1.count();          // 1
 *
 * // Solution 2
 * const cache2 = new TimeLimitedCacheAuto();
 * cache2.set(1, 42, 1000); // false
 * cache2.get(1);           // 42
 * cache2.count();          // 1
 * // after ~1000ms
 * cache2.get(1);           // -1
 * cache2.count();          // 0
 */
