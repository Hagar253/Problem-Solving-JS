/**
 * Problem: EventEmitter
 * Platform: LeetCode
 * Difficulty: Medium
 * Description:
 * Implement an EventEmitter class that allows subscribing to events, 
 * emitting events, and unsubscribing from events.
 */

/* -------------------------
   Solution — Using an object to store callbacks
-------------------------- */
class EventEmitter {
    constructor() {
        // Object to hold eventName -> array of callbacks
        this.events = {};
    }
    
    /**
     * Subscribe to an event with a callback
     * @param {string} eventName - Name of the event
     * @param {Function} callback - Callback function to register
     * @return {Object} - Object with unsubscribe method
     */
    subscribe(eventName, callback) {
        // Initialize array if no callbacks exist yet for this event
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        // Add the callback
        this.events[eventName].push(callback);
        
        return {
            // Unsubscribe removes the callback from the array
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
            }
        };
    }
    
    /**
     * Emit an event, calling all registered callbacks
     * @param {string} eventName - Name of the event
     * @param {Array} args - Arguments to pass to each callback
     * @return {Array} - Array of results from each callback
     */
    emit(eventName, args = []) {
        // Get callbacks for this event or empty array
        const callbacks = this.events[eventName] || [];
        const results = [];

        // Execute all callbacks with provided arguments
        for (const cb of callbacks) {
            results.push(cb(...args));
        }

        return results;
    }
}

/**
 * Example usage:
 * const emitter = new EventEmitter();
 * function onClickCallback() { return 99; }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); 
 * emitter.emit('onClick'); // []
 */
