/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const sortedIntervals = intervals.sort((a, b) => a.end - b.end)

        let current = 0

        for (let i = 1; i < sortedIntervals.length; i++) {
            if (sortedIntervals[i].start >= sortedIntervals[current].end) {
                current++
            } else {
                return false
            }
        }
        return true
    }
}
