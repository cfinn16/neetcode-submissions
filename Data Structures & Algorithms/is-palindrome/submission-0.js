class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const string = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        let l = 0
        let r = string.length - 1
        while (l < r) {
            console.log(string[l])
            console.log(string[r])
            if (string[l] === string[r]) {
                l++
                r--
            } else {
                return false
            }
        }
        return true
    }
}
